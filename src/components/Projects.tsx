// noinspection JSDeprecatedSymbols

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { loadProjects } from '../data';
import type { Project } from '../types';

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading project data:', error);
        setError('Error al cargar los datos de los proyectos.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id='projects' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-6'>
        <motion.h2
          className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Proyectos Destacados
        </motion.h2>

        <div
          ref={ref}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className='relative overflow-hidden group'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
                  <motion.a
                    href={project.githubUrl}
                    className='p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className='p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
