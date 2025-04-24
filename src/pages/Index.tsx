
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import SummaryCard, { Summary } from "@/components/SummaryCard";
import SummaryDialog from "@/components/SummaryDialog";

// Datos de ejemplo
const summaryData: Summary[] = [
  {
    id: 1,
    title: "Introducción a la Programación",
    topic: "Fundamentos de Programación",
    content: `¿Qué es la programación?
La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora cómo realizar una tarea.

Conceptos básicos:
- Variables
- Tipos de datos
- Estructuras de control
- Funciones
- Algoritmos

Beneficios de la programación:
1. Desarrollo del pensamiento lógico
2. Resolución de problemas
3. Creatividad
4. Oportunidades laborales`,
    date: "2024-04-15"
  },
  {
    id: 2,
    title: "Estructuras de Datos",
    topic: "Fundamentos de Programación",
    content: `Las estructuras de datos son formas de organizar y almacenar datos.

Tipos principales:
1. Arrays
2. Listas enlazadas
3. Pilas
4. Colas
5. Árboles
6. Grafos

Importancia:
- Eficiencia en el manejo de datos
- Optimización de recursos
- Mejor organización del código`,
    date: "2024-04-16"
  },
  {
    id: 3,
    title: "HTML y CSS Básico",
    topic: "Desarrollo Web",
    content: `HTML (HyperText Markup Language):
- Estructura básica de una página web
- Etiquetas principales
- Elementos semánticos
- Enlaces y navegación

CSS (Cascading Style Sheets):
- Selectores
- Propiedades básicas
- Box model
- Flexbox y Grid
- Responsive design`,
    date: "2024-04-17"
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
