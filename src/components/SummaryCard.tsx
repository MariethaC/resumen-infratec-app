
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Card } from "./ui/card";

export interface Summary {
  id: number;
  title: string;
  topic: string;
  date: string;
  url: string;
}

interface SummaryCardProps {
  summary: Summary;
  onClick: () => void;
}

const SummaryCard = ({ summary, onClick }: SummaryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3">
          <FileText className="h-5 w-5 text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-lg mb-1">{summary.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{summary.topic}</p>
            <p className="text-xs text-gray-500">{summary.date}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SummaryCard;
