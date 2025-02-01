import type { Experience } from '../types';


const experience: Experience[] = [
    {
        id: 1,
        role: 'Senior Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: '2022 - Presente',
        description: [
            'Lideré un equipo de 5 desarrolladores en la implementación de una aplicación web de gran escala.',
            'Mejoré el rendimiento de la aplicación reduciendo el tiempo de carga en un 40%.',
            'Implementé CI/CD pipelines y prácticas de testing automatizado.',
        ],
        technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    },
    {
        id: 2,
        role: 'Frontend Developer',
        company: 'Digital Innovations',
        period: '2020 - 2022',
        description: [
            'Desarrollé y mantuve múltiples aplicaciones web utilizando React y TypeScript.',
            'Colaboré con equipos de diseño para implementar interfaces de usuario responsivas.',
            'Integré APIs RESTful y servicios de terceros.',
        ],
        technologies: ['React', 'Redux', 'TypeScript', 'Material-UI'],
    },
    {
        id: 3,
        role: 'Desarrollador Web Junior',
        company: 'StartUp Tech',
        period: '2019 - 2020',
        description: [
            'Participé en el desarrollo de aplicaciones web frontend.',
            'Implementé diseños responsivos y accesibles.',
            'Colaboré en la optimización de rendimiento y SEO.',
        ],
        technologies: ['JavaScript', 'React', 'CSS3', 'HTML5'],
    },
]

export default experience;