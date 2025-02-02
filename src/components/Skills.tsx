/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { loadSkills } from '../data';
import type { SkillCategory } from '../types';

function Skills() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [skills, setSkills] = useState<SkillCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadSkills()
            .then((data) => {
                setSkills(data); // Asigna los datos directamente al estado
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading skills data:", error);
                setError("Error al cargar los datos de habilidades.");
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
        <section id="skills" className="py-40 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Habilidades Técnicas
                </motion.h2>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skills.map((category, index) => {
                        const IconComponent = category.icon.component;

                        // Convertir el array de props en un objeto
                        const iconProps = category.icon.props.reduce((acc: { [x: string]: any; }, prop: { name: string | number; value: any; }) => {
                            acc[prop.name] = prop.value;
                            return acc;
                        }, {} as Record<string, any>);

                        return (
                            <motion.div
                                key={`skill-category-${index}`}
                                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-4">
                                    <IconComponent
                                        {...iconProps} // Pasar las props dinámicamente
                                        className="text-purple-600 dark:text-purple-400 mr-2"
                                    />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {category.name}
                                    </h3>
                                </div>

                                <div className="space-y-2">
                                    {category.skills.map((skill, i) => (
                                        <div
                                            key={`skill-${i}`}
                                            className="flex items-center text-gray-600 dark:text-gray-300"
                                        >
                                            <span className="mr-2">{skill.icon}</span>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;