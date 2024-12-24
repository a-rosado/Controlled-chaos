export default function HighlightCard({ title, description }) {
  return (
    <div className="bg-gray-100 p-6 rounded shadow">
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-sm sm:text-base text-gray-700">{description}</p>
    </div>
  );
}
