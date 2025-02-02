import type { Experience, SkillCategory, Project, About } from '../types';

type DataCache = {
  experiences: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  about: About[];
};

// Data caché
const cache: Partial<DataCache> = {}; // Use Partial to allow for partial initialization

// Generic function to load data from JSON files
const loadData = async <K extends keyof DataCache>(
  key: K
): Promise<DataCache[K]> => {
  // If data is already in cache, return it
  if (cache[key]) {
    return cache[key] as DataCache[K];
  }

  try {
    // Load data dinamically based on the key
    let data: DataCache[K];
    switch (key) {
      case 'experiences':
        data = (await import('./experience.json')).default as DataCache[K];
        break;
      case 'skills':
        data = (await import('./skills.json')).default as DataCache[K];
        break;
      case 'projects':
        data = (await import('./projects.json')).default as DataCache[K];
        break;
      case 'about':
        data = (await import('./about.json')).default as DataCache[K];
        break;
      default:
        throw new Error(`Tipo de datos no soportado: ${key}`);
    }

    // Store data in cache and return it
    cache[key] = data;

    return data as DataCache[K];
  } catch (error) {
    console.error(`Error al cargar ${key}:`, error);
    throw new Error(`No se pudo cargar ${key}`);
  }
};

// Export functions to load data
export const loadExperiences = async (): Promise<Experience[]> => {
  return loadData('experiences');
};

export const loadSkills = async (): Promise<SkillCategory[]> => {
  return loadData('skills');
};

export const loadProjects = async (): Promise<Project[]> => {
  return loadData('projects');
};

export const loadAbout = async (): Promise<About[]> => {
  return loadData('about');
};
