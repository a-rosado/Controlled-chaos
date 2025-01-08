import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("API hit"); // Add this log
  const { name, email, message } = await request.json();
  console.log({ name, email, message }); // Log the input

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
       user: process.env.EMAIL_USER, // Your Gmail address
       pass: process.env.EMAIL_PASS, // Your Gmail app password (App Passwords must be enabled in Google account settings)
    },
  });

  const mailOptions = {
    from: email,
    to: "controlledchaosracingctx@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
 