import technoImage from '../assets/images/project_festmusic.png';
import dashTasksImage from '../assets/images/project_dashtask.jpg';
import blogCafeImage from '../assets/images/project_blogcafe.png';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Techno-Festival Website',
    description:
      'Sitio web que simula la plataforma oficial de un festival de música "Techno & EDM Festival".',
    image: technoImage,
    technologies: ['HTML', 'Sass', 'JavaScript', 'Gulp'],
    githubUrl: 'https://github.com/DiegoT4l/Music-Festival-Project',
    liveUrl: 'https://festmusic.diegot4l.com/',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con estadisticas y gráficos de progreso.',
    image: dashTasksImage,
    technologies: ['Bootstrap', 'Sass', 'JQuery', 'Webpack'],
    githubUrl: 'https://github.com/DiegoT4l/dashboard-tasks',
    liveUrl: 'https://dashtask.diegot4l.com/',
  },
  {
    id: 3,
    title: 'BlogDeCafé Website',
    description:
      'Sitio web de un blog de café con cursos y consejos para los amantes del café.',
    image: blogCafeImage,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export default projects;
