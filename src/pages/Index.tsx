import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import SummaryCard, { Summary } from "@/components/SummaryCard";
import SummaryDialog from "@/components/SummaryDialog";

// Datos de ejemplo organizados por temas del curso
const summaryData: Summary[] = [
  {
    id: 1,
    title: "Rol de la Tecnología",
    url:"/imagenes/rol-tecnologia.png"
  },
  {
    id: 2,
    title: "Fundamentos de Redes",
    url:"/imagenes/rol-tecnologia.png"
  },
  {
    id: 3,
    title: "Estructura del Data Center",
    url:"/imagenes/rol-tecnologia.png"
  },
  {
    id: 4,
    title: "Arquitectura Cliente-Servidor",
    url:"/imagenes/rol-tecnologia.png"
  },
  {
    id: 5,
    title: "Tecnologías de Virtualización",
    url:"/imagenes/rol-tecnologia.png"
  },
  {
    id: 6,
    title: "Modelos de Servicio Cloud",
    url:"/imagenes/rol-tecnologia.png"
  }
];

const Index = () => {
  const [summaries, setSummaries] = useState<Summary[]>(summaryData);
  const [selectedSummary, setSelectedSummary] = useState<Summary | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearch = (query: string) => {
    const filtered = summaryData.filter(
      (summary) =>
        summary.title.toLowerCase().includes(query.toLowerCase())
    );
    setSummaries(filtered);
  };

  const handleSummaryClick = (summary: Summary) => {
    setSelectedSummary(summary);
    setIsDialogOpen(true);
  };
  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-8">
      {summaries.map((summary) => (
        <SummaryCard
          key={summary.id}
          summary={summary}
          onClick={() => handleSummaryClick(summary)}
        />
      ))}
    </div>
  );
};

export default Index;
