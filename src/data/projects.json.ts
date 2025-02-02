import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'Una plataforma de comercio electrónico moderna construida con React y TypeScript.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con características de arrastrar y soltar.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    technologies: ['React', 'TypeScript', 'React DnD', 'Firebase'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description:
      'Dashboard para análisis de redes sociales con gráficos interactivos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    technologies: ['React', 'D3.js', 'Material-UI', 'Node.js'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export default projects;
