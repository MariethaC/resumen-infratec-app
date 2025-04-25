import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import SummaryCard, { Summary } from "@/components/SummaryCard";
import SummaryDialog from "@/components/SummaryDialog";

// Datos de ejemplo organizados por temas del curso
const summaryData: Summary[] = [
  {
    id: 1,
    title: "Rol de la Tecnología",
    topic: " ",
    date: " ",
    url:"public/imagenes/rol-tecnologia.png"
  },
  {
    id: 2,
    title: "Fundamentos de Redes",
    topic: "Redes de datos",
    date: "2024-04-16",
    url:"public/imagenes/rol-tecnologia.png"
  },
  {
    id: 3,
    title: "Estructura del Data Center",
    topic: "Data center y almacenamiento",
    date: "2024-04-17",
    url:"public/imagenes/rol-tecnologia.png"
  },
  {
    id: 4,
    title: "Arquitectura Cliente-Servidor",
    topic: "Servidores e Internet",
    date: "2024-04-18",
    url:"public/imagenes/rol-tecnologia.png"
  },
  {
    id: 5,
    title: "Tecnologías de Virtualización",
    topic: "Virtualización",
    date: "2024-04-19",
    url:"public/imagenes/rol-tecnologia.png"
  },
  {
    id: 6,
    title: "Modelos de Servicio Cloud",
    topic: "Cloud computing",
    date: "2024-04-20",
    url:"public/imagenes/rol-tecnologia.png"
  }
];

const Index = () => {
  const [summaries, setSummaries] = useState<Summary[]>(summaryData);
  const [selectedSummary, setSelectedSummary] = useState<Summary | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearch = (query: string) => {
    const filtered = summaryData.filter(
      (summary) =>
        summary.title.toLowerCase().includes(query.toLowerCase()) ||
        summary.topic.toLowerCase().includes(query.toLowerCase())
    );
    setSummaries(filtered);
  };

  const handleSummaryClick = (summary: Summary) => {
    setSelectedSummary(summary);
    setIsDialogOpen(true);
  };

  // Agrupar resúmenes por tema
  const groupedSummaries: { [key: string]: Summary[] } = summaries.reduce(
    (acc, summary) => {
      (acc[summary.topic] = acc[summary.topic] || []).push(summary);
      return acc;
    },
    {} as { [key: string]: Summary[] }
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Resúmenes de Clase
        </h1>
        <SearchBar onSearch={handleSearch} />
        <div className="space-y-8">
          {Object.entries(groupedSummaries).map(([topic, topicSummaries]) => (
            <div key={topic}>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                {topic}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {topicSummaries.map((summary) => (
                  <SummaryCard
                    key={summary.id}
                    summary={summary}
                    onClick={() => handleSummaryClick(summary)}
                  />
                ))}
              </div>
            </div>
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
