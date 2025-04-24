
import { motion } from "framer-motion";
import { 
  Handshake, 
  Network, 
  Truck, 
  Clock, 
  Info, 
  DollarSign, 
  Earth, 
  Infinity, 
  Hammer, 
  Rocket, 
  Computer, 
  Users,
  Layers 
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export interface KeyConcept {
  icon: keyof typeof iconMap;
  label: string;
  description: string;
}

export interface Summary {
  id: number;
  title: string;
  topic: string;
  content: string;
  date: string;
  keyConcepts?: KeyConcept[];
}

const iconMap = {
  handshake: Handshake,
  network: Network,
  truck: Truck,
  clock: Clock,
  info: Info,
  "dollar-sign": DollarSign,
  earth: Earth,
  infinity: Infinity,
  hammer: Hammer,
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
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Computer className="h-6 w-6 text-purple-600 mt-1" />
            <div>
              <h3 className="font-medium text-xl mb-2">{summary.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{summary.topic}</p>
              <p className="text-xs text-gray-500">{summary.date}</p>
            </div>
          </div>
          
          {summary.keyConcepts && (
            <div className="flex flex-wrap gap-2">
              {summary.keyConcepts.map((concept, index) => {
                const IconComponent = iconMap[concept.icon];
                return (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center gap-1 px-3 py-1"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{concept.label}</span>
                  </Badge>
                );
              })}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default SummaryCard;

