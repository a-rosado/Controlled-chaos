import { Open_Sans, Roboto, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Adjust the path if necessary
import Footer from "@/components/footer"; // Adjust the path if necessary

// Font configurations
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Controlled Chaos Racing",
  description: "Experience the adrenaline of Controlled Chaos Racing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${openSans.variable} ${lato.variable} antialiased bg-gray-100 text-gray-900`}
      >
        {/* Global Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main>{children}</main>
        
        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
