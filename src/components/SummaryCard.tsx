import { motion } from "framer-motion";
import { Computer } from "lucide-react";
import { Card } from "./ui/card";

export interface KeyConcept {
  icon: keyof typeof iconMap;
  label: string;
  description?: string;
}

export interface Summary {
  id: number;
  title: string;
  topic: string;
  content: string;
  date: string;
  keyConcepts?: KeyConcept[];
  imageSrc?: string;
}

export const iconMap = {
  "arrow-left": ArrowLeft,
  handshake: Handshake,
  network: Network,
  truck: Truck,
  clock: Clock,
  info: Info,
  "dollar-sign": DollarSign,
  earth: Earth,
  infinity: Infinity,
  rocket: Rocket,
  computer: Computer,
  users: Users,
  layers: Layers
};

interface SummaryCardProps {
  summary: Summary;
  onClick: () => void;
}

const SummaryCard = ({ summary, onClick }: SummaryCardProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Computer className="h-5 w-5 text-purple-600" />
        <h3 className="font-medium text-lg">{summary.title}</h3>
      </div>
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
      >
        <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
          {summary.imageSrc && (
            <img 
              src={summary.imageSrc} 
              alt={summary.title}
              className="w-full h-auto object-cover"
            />
          )}
        </Card>
      </motion.div>
    </div>
  );
};

export default SummaryCard;
