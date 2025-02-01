import type { SkillCategory } from '../types';
import { Code2 } from 'lucide-react';


const skills: SkillCategory[] = [
    {
        name: 'Frontend',
        icon: Code2,
        skills: [
            { name: 'React', icon: '⚛️' },
            { name: 'TypeScript', icon: '📘' },
            { name: 'Next.js', icon: '▲' },
            { name: 'HTML5', icon: '🌐' },
            { name: 'CSS3/Sass', icon: '🎨' },
            { name: 'Tailwind CSS', icon: '🌊' },
        ],
    },
]


export default skills;