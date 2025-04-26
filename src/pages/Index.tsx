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
    title: "Redes de datos",
    url:"/imagenes/redes-datos.png"
  },
  {
    id: 3,
    title: "Data Center y almacenamiento",
    url:"/imagenes/datacenter.png"
  },
  {
    id: 4,
    title: "Servidores e Internet",
    url:"/imagenes/servidores.png"
  },
  {
    id: 5,
    title: "Virtualización",
    url:"/imagenes/virtualizacion.png"
  },
  {
    id: 6,
    title: "Cloud Computing",
    url:"/imagenes/cloud-computing.png"
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
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Resúmenes de Clase
        </h1>
        <SearchBar onSearch={handleSearch} />
        <div className="grid gap-4 sm:grid-cols-2 mt-8">
          {summaries.map((summary) => (
            <SummaryCard
              key={summary.id}
              summary={summary}
              onClick={() => handleSummaryClick(summary)}
            />
          ))}
        </div>
      </div>
      <SummaryDialog
        summary={selectedSummary}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Index;
