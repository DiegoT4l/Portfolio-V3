import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { loadAbout } from '../data';
import type { About } from '../types';
import { useEffect, useState } from 'react';

function About() {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [paragraphs, setParagraphs] = useState<About[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadAbout()
            .then((data) => {
                setParagraphs(data); // Assign the data directly to the state
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error loading about data:", error);
                setError("Error al cargar los datos sobre mí.");
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
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent" />
                        </div>
                    </motion.div>

                    <div>
                        <motion.h2
                            className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Sobre mí
                        </motion.h2>

                        {/* Show paragraphs dinamically */}
                        {paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className="text-gray-600 dark:text-gray-300 mb-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                            >
                                {paragraph.desc}
                            </motion.p>
                        ))}

                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.a
                                href="#contact"
                                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contactar
                            </motion.a>
                            <motion.a
                                href="#skills"
                                className="px-6 py-2 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Ver Habilidades
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;