
import { Summary } from "@/components/SummaryCard";

export const groupSummariesByTopic = (summaries: Summary[]) => {
  return summaries.reduce(
    (acc, summary) => {
      (acc[summary.topic] = acc[summary.topic] || []).push(summary);
      return acc;
    },
    {} as { [key: string]: Summary[] }
  );
};
