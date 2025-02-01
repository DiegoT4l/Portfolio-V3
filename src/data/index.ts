import type {  Experience, SkillCategory, Project, About } from '../types';

type DataCache = {
    experiences?: Experience[];
    skills?: SkillCategory[];
    projects?: Project[];
    about?: About[];
};

// object to store data in memory
const cache: DataCache = {};

// Function to load data from a file
const loadData = async <T>(key: keyof DataCache, path: string): Promise<T> => {
    // Si los datos ya están en caché, los devolvemos
    if (cache[key]) {
        return cache[key] as T;
    }

    try {
        // Load the module dynamically
        const module = await import(path);
        const data = module.default;

        // Store the data in cache
        cache[key] = data;

        return data;
    } catch (error) {
        console.error(`Error al cargar ${key}:`, error);
        throw new Error(`No se pudo cargar ${key}`);
    }
};

// Functions to load data
export const loadExperiences = async (): Promise<Experience[]> => {
    return loadData<Experience[]>('experiences', './experience.json');
};

export const loadSkills = async (): Promise<SkillCategory[]> => {
    return loadData<SkillCategory[]>('skills', './skills.json');
};

export const loadProjects = async (): Promise<Project[]> => {
    return loadData<Project[]>('projects', './projects.json');
};

export const loadAbout = async (): Promise<About> => {
    return loadData<About>('about', './about.json');
};