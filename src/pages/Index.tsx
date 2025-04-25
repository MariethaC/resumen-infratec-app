
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { Summary } from "@/components/SummaryCard";
import SummaryDialog from "@/components/SummaryDialog";
import SummaryGrid from "@/components/SummaryGrid";
import { useSearchSummaries } from "@/hooks/useSearchSummaries";
import { groupSummariesByTopic } from "@/utils/summaryUtils";

const Index = () => {
  const { summaries, handleSearch } = useSearchSummaries();
  const [selectedSummary, setSelectedSummary] = useState<Summary | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSummaryClick = (summary: Summary) => {
    setSelectedSummary(summary);
    setIsDialogOpen(true);
  };

  const groupedSummaries = groupSummariesByTopic(summaries);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Resúmenes de Clase
        </h1>
        <SearchBar onSearch={handleSearch} />
        <SummaryGrid 
          summaries={groupedSummaries} 
          onSummaryClick={handleSummaryClick}
        />
      </div>
      <SummaryDialog
        summary={selectedSummary}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Index;
