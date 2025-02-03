import type { SkillCategory } from '../types';
import {
  Code2,
  Server,
  Database,
  Terminal,
  Palette,
  Wrench,
} from 'lucide-react';

const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: {
      component: Code2,
      props: [{ name: 'size', value: 24 }],
    },
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'CSS3/Sass', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '🌊' },
    ],
  },
  {
    name: 'Backend',
    icon: {
      component: Server,
      props: [{ name: 'size', value: 24 }],
    },
    skills: [
      { name: 'Node.js', icon: '💚' },
      { name: 'Express', icon: '🚂' },
      { name: 'GraphQL', icon: '📊' },
      { name: 'REST APIs', icon: '🔌' },
    ],
  },
  {
    name: 'Bases de Datos',
    icon: {
      component: Database,
      props: [{ name: 'size', value: 24 }],
    },
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
    ],
  },
  {
    name: 'DevOps',
    icon: {
      component: Terminal,
      props: [{ name: 'size', value: 24 }],
    },
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'Docker', icon: '🐳' },
      { name: 'CI/CD', icon: '🔄' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Linux', icon: '🐧' },
    ],
  },
  {
    name: 'UI/UX',
    icon: {
      component: Palette,
      props: [{ name: 'size', value: 24 }],
    },
    skills: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Responsive Design', icon: '📱' },
      { name: 'Wireframing', icon: '✏️' },
      { name: 'Visual Design', icon: '👁️' },
    ],
  },
  {
    name: 'Herramientas',
    icon: {
      component: Wrench,
      props: [{ name: 'size', value: 24 }],
    },
    skills: [
      { name: 'VS Code', icon: '💻' },
      { name: 'Jest', icon: '🃏' },
      { name: 'Webpack', icon: '📦' },
      { name: 'npm/yarn', icon: '📦' },
    ],
  },
];

export default skills;
