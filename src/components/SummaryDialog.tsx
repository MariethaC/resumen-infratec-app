
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Summary } from "./SummaryCard";

interface SummaryDialogProps {
  summary: Summary | null;
  isOpen: boolean;
  onClose: () => void;
}

const SummaryDialog = ({ summary, isOpen, onClose }: SummaryDialogProps) => {
  if (!summary) return null;

  // Map of topics to their corresponding images
  const topicImages: { [key: string]: string } = {
    "El rol de las tecnologías": "public/imagenes/rol-tecnologia.png",
    // Add more mappings for other topics as needed
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-0">
        {topicImages[summary.topic] && (
          <img
            src={topicImages[summary.topic]}
            alt={summary.title}
            className="w-full h-full object-contain"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SummaryDialog;
