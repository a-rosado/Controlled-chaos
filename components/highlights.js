import HighlightCard from "./highlightCard";

export default function Highlights() {
  return (
    <section id="highlights" className="bg-blue py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <HighlightCard
            title="Highlight 1"
            description="Description of the highlight or event."
          />
          <HighlightCard
            title="Highlight 2"
            description="Description of the highlight or event."
          />
          <HighlightCard
            title="Highlight 3"
            description="Description of the highlight or event."
          />
        </div>
      </div>
    </section>
  );
}
