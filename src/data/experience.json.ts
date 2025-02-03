import type { Experience } from '../types';

const experience: Experience[] = [
  {
    id: 1,
    role: 'Desarrollador Web',
    company: 'Nucleo3D.',
    period: '2024 - 2025',
    description: [
      'Mejoré el rendimiento de la aplicación reduciendo el tiempo de carga significativamente.',
      'Implementé CI/CD pipelines y prácticas de testing automatizado.',
      'Implementé medidas de seguridad y protección de datos con Cloudflare.',
    ],
    technologies: ['Astro', 'TypeScript', 'TailwindCSS', 'Cloudflare'],
  },
  {
    id: 2,
    role: 'Desarrollador Frontend',
    company: 'Universidad UTEL',
    period: '2023 - 2024',
    description: [
      'Desarrollé y mantuve múltiples aplicaciones web utilizando React y TypeScript.',
      'Colaboré con equipos de diseño para implementar interfaces de usuario responsivas.',
      'Integré APIs RESTful y servicios de terceros.',
    ],
    technologies: ['React', 'Redux', 'TypeScript', 'Material-UI'],
  },
  {
    id: 3,
    role: 'Desarrollador Frontend',
    company: 'Teleperformance',
    period: '2022 - 2023',
    description: [
      'Participé en el desarrollo de aplicaciones web frontend.',
      'Implementé diseños responsivos y accesibles.',
      'Colaboré en la optimización de rendimiento y SEO.',
    ],
    technologies: ['React', 'TailwindCSS', 'OpenAI', 'Node.js'],
  },
  {
    id: 4,
    role: 'Desarrollador Web Junior',
    company: 'Apostar Tecnológico',
    period: '2022 - 2023',
    description: [
      'Participé en el desarrollo de aplicaciones web frontend.',
      'Integré APIs RESTful y servicios de terceros.',
      'Integré algoritmos de ordenamiento y búsqueda en la aplicación.',
    ],
    technologies: ['React', 'Sass', 'Bootstrap', 'PostgreSQL'],
  },
];

export default experience;
