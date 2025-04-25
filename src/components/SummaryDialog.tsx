
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
        
        {summary.keyConcepts && (
          <div className="grid grid-cols-2 gap-4 mt-6 mb-8">
            {summary.keyConcepts.map((concept, index) => {
              const IconComponent = iconMap[concept.icon];
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-50"
                >
                  {IconComponent && <IconComponent className="h-6 w-6 text-purple-600 mt-1" />}
                  <div>
                    <h4 className="font-medium text-sm mb-1">{concept.label}</h4>
                    {concept.description && (
                      <p className="text-sm text-gray-600">{concept.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
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
