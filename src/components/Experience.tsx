import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';
import { loadExperiences } from '../data';
import type { Experience } from '../types';

function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadExperiences()
      .then((data) => {
        setExperiences(data); // Asigna los datos directamente al estado
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading experience data:', error);
        setError('Error al cargar los datos de experiencia.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga
  }

  if (error) {
    return <div>{error}</div>; // Muestra un mensaje de error
  }

  return (
    <section id='experience' className='py-44 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-6'>
        <motion.h2
          className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experiencia Profesional
        </motion.h2>

        <div ref={ref} className='max-w-4xl mx-auto space-y-8'>
          {experiences.map((exp, index) => (
            <motion.div
              key={`experience:${exp.id}`}
              className='relative pl-8 md:pl-0'
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className='md:grid md:grid-cols-12 md:gap-4'>
                {/* Timeline line */}
                <div className='hidden md:block md:col-span-2 relative'>
                  <div className='h-full w-0.5 bg-purple-200 dark:bg-purple-800 absolute right-8 top-0' />
                  <div className='absolute right-6 top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900' />
                </div>

                {/* Content */}
                <div className='md:col-span-10 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                      {exp.role}
                    </h3>
                    <span className='flex items-center text-sm text-gray-600 dark:text-gray-400'>
                      <Calendar size={16} className='mr-1' />
                      {exp.period}
                    </span>
                  </div>

                  <div className='flex items-center text-purple-600 dark:text-purple-400 mb-4'>
                    <Briefcase size={16} className='mr-2' />
                    <span className='font-medium'>{exp.company}</span>
                  </div>

                  <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4'>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
