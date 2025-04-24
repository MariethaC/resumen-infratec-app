
import { Summary } from "./SummaryCard";
import SummaryCard from "./SummaryCard";

interface SummaryGridProps {
  summaries: { [key: string]: Summary[] };
  onSummaryClick: (summary: Summary) => void;
}

const SummaryGrid = ({ summaries, onSummaryClick }: SummaryGridProps) => {
  return (
    <div className="space-y-8">
      {Object.entries(summaries).map(([topic, topicSummaries]) => (
        <div key={topic}>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            {topic}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {topicSummaries.map((summary) => (
              <SummaryCard
                key={summary.id}
                summary={summary}
                onClick={() => onSummaryClick(summary)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryGrid;
