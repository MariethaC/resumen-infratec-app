import { Summary } from "@/components/SummaryCard";

export const summaryData: Summary[] = [
  {
    id: 1,
    title: "El Rol de las Tecnologías",
    topic: "Tecnologías de la Información",
    content: `La tecnología cumple diferentes roles (ROLES):

Mediador: Puente entre 2 personas que tienen objetivos similares o complementarios.
Externalidad de red: Con cuantas personas se puede comunicar o conectar una empresa.
Canal de distribución: Conecta a todo el mundo. Se volvió canal de entrega.
Moderador de tiempo: Ofrecer y tener acceso a servicios 24/7.
Reduce asimetría: Mayor cantidad de personas con acceso a información.
Reduce Costo: de transacción.
Universalidad: Usada por todos.
Capacidad infinita: la limitante no es la capacidad, es el presupuesto.
Estándar de bajo costo: de comunicación, de seguridad de vpn's que no cuestan mucho.
Destructor creativo: con la intención de ser más eficiente, da de baja modelos y crea modelos usando tecnología.

5 Fuerzas de Porter:
La tecnología se une para reducir las amenazas y aprovechar las oportunidades.

5 C's:
- Coordinación
- Comercio
- Comunidad
- Contenido
- Comunicación

Uso de las TIC's:
- Mejora de procesos: eficientes y automatizados
- Mejora de la toma de decisiones: provee información
- Interconecta empresa-stakeholders
- Transforma/crea organizaciones: modifica/define un modelo de negocio

Solución empresarial: capacitar, monitoriar, evaluar
Sistema de información: Aplicaciones en sistema empresarial
Tecnologías de información: Hardware + Software

Combinación de equipos, software, aplicaciones y servicios que resuelven un problema de negocios.
El conjunto de componentes es base para que la solución brinde resultados.`,
    date: "2024-04-15",
    keyConcepts: [
      {
        icon: "handshake",
        label: "Mediador",
        description: "Puente entre personas con objetivos similares"
      },
      {
        icon: "network",
        label: "Externalidad de red",
        description: "Conexión entre personas y empresa"
      },
      {
        icon: "truck",
        label: "Canal de distribución",
        description: "Conecta al mundo entero"
      },
      {
        icon: "clock",
        label: "Moderador de tiempo",
        description: "Servicios 24/7"
      },
      {
        icon: "info",
        label: "Reduce asimetría",
        description: "Mayor acceso a información"
      },
      {
        icon: "dollar-sign",
        label: "Reduce costos",
        description: "Menor costo de transacción"
      },
      {
        icon: "earth",
        label: "Universalidad",
        description: "Usada por todos"
      },
      {
        icon: "infinity",
        label: "Capacidad infinita",
        description: "Limitada por presupuesto"
      },
      {
        icon: "layers",
        label: "Estándar de bajo costo",
        description: "Comunicación y seguridad accesible"
      },
      {
        icon: "rocket",
        label: "Destructor creativo",
        description: "Crea nuevos modelos eficientes"
      }
    ]
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
