
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Summary } from "./SummaryCard";
import { iconMap } from "./SummaryCard";

interface SummaryDialogProps {
  summary: Summary | null;
  isOpen: boolean;
  onClose: () => void;
}

const SummaryDialog = ({ summary, isOpen, onClose }: SummaryDialogProps) => {
  if (!summary) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4"
            onClick={onClose}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-xl font-semibold pt-2">
            {summary.title}
          </DialogTitle>
          <p className="text-sm text-gray-600">{summary.topic}</p>
        </DialogHeader>
        
        {summary.imageSrc && (
          <div className="mt-4">
            <img 
              src={summary.imageSrc} 
              alt={summary.title}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        )}
        
        <div className="mt-4 text-gray-800 leading-relaxed whitespace-pre-wrap">
          {summary.content}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SummaryDialog;
