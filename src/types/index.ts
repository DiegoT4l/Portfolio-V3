import React from 'react';

export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
}

export interface Skill {
    name: string;
    icon: string;
}

export interface SkillCategory {
    name: string;
    // @ts-expect-error - This is a workaround for a bug in the Lucide library
    icon: React.Global.JSX.Element;
    skills: Skill[];
}