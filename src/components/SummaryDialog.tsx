
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto p-0">
        <img
          src={summary.url}
          alt={summary.title}
          className="w-full h-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SummaryDialog;
