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
    content: `Impacto de la tecnología en la sociedad moderna:

1. Transformación digital
- Cambios en la forma de trabajar
- Nuevas herramientas y metodologías
- Adaptación continua

2. Beneficios y desafíos
- Mayor eficiencia y productividad
- Necesidad de actualización constante
- Brecha digital

3. Tendencias futuras
- Inteligencia Artificial
- Internet de las Cosas (IoT)
- Automatización`,
    date: "2024-04-15"
  },
  {
    id: 2,
    title: "Fundamentos de Redes",
    topic: "Redes de datos",
    content: `Conceptos básicos de redes de datos:

1. Tipos de redes
- LAN (Red de Área Local)
- WAN (Red de Área Amplia)
- MAN (Red de Área Metropolitana)

2. Protocolos principales
- TCP/IP
- HTTP/HTTPS
- DNS

3. Componentes de red
- Routers
- Switches
- Firewalls`,
    date: "2024-04-16"
  },
  {
    id: 3,
    title: "Estructura del Data Center",
    topic: "Data center y almacenamiento",
    content: `Componentes y funcionamiento del Data Center:

1. Infraestructura física
- Sistemas de refrigeración
- Alimentación eléctrica
- Seguridad física

2. Sistemas de almacenamiento
- SAN (Storage Area Network)
- NAS (Network Attached Storage)
- DAS (Direct Attached Storage)

3. Consideraciones de diseño
- Redundancia
- Escalabilidad
- Eficiencia energética`,
    date: "2024-04-17"
  },
  {
    id: 4,
    title: "Arquitectura Cliente-Servidor",
    topic: "Servidores e Internet",
    content: `Funcionamiento de servidores e Internet:

1. Tipos de servidores
- Servidores web
- Servidores de aplicaciones
- Servidores de bases de datos

2. Protocolos de Internet
- HTTP y HTTPS
- FTP
- SMTP

3. Seguridad en servidores
- Firewall
- SSL/TLS
- Actualizaciones de seguridad`,
    date: "2024-04-18"
  },
  {
    id: 5,
    title: "Tecnologías de Virtualización",
    topic: "Virtualización",
    content: `Conceptos fundamentales de virtualización:

1. Tipos de virtualización
- Virtualización de servidores
- Virtualización de escritorio
- Virtualización de red

2. Beneficios
- Mejor utilización de recursos
- Mayor flexibilidad
- Reducción de costos

3. Herramientas principales
- VMware
- Hyper-V
- VirtualBox`,
    date: "2024-04-19"
  },
  {
    id: 6,
    title: "Modelos de Servicio Cloud",
    topic: "Cloud computing",
    content: `Fundamentos de Cloud Computing:

1. Modelos de servicio
- IaaS (Infraestructura como Servicio)
- PaaS (Plataforma como Servicio)
- SaaS (Software como Servicio)

2. Ventajas del cloud
- Escalabilidad
- Flexibilidad
- Pago por uso

3. Principales proveedores
- AWS
- Microsoft Azure
- Google Cloud Platform`,
    date: "2024-04-20"
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
