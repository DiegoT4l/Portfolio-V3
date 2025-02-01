import type { Experience } from '../types';


const experience: Experience[] = [
    {
        id: 1,
        role: 'Frontend Developer',
        company: 'Acme Inc.',
        period: '2022 - Presente',
        description: [
            'Diseñé y desarrollé aplicaciones web escalables utilizando tecnologías modernas',
            'como React, Redux y JavaScript. Implementé pruebas unitarias y de integración',
            'para garantizar la calidad del código.'
        ],
        technologies: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
        id: 2,
        role: 'Software Engineer',
        company: 'Tech Corp',
        period: '2020 - 2022',
        description: [
            'Colaboré en el desarrollo de aplicaciones web y móviles utilizando tecnologías',
            'como React, Node.js y MongoDB. Implementé pruebas automatizadas para',
            'mejorar la calidad del software.'
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'Jest', 'Enzyme']
    }
]

export default experience;