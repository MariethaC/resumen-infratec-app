
import { useState, useCallback } from "react";
import { Summary } from "@/components/SummaryCard";
import { summaryData } from "@/data/summaryData";

export const useSearchSummaries = () => {
  const [summaries, setSummaries] = useState<Summary[]>(summaryData);

  const handleSearch = useCallback((query: string) => {
    const filtered = summaryData.filter(
      (summary) =>
        summary.title.toLowerCase().includes(query.toLowerCase()) ||
        summary.topic.toLowerCase().includes(query.toLowerCase())
    );
    setSummaries(filtered);
  }, []);

  return {
    summaries,
    handleSearch,
  };
};
