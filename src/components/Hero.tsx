import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';

function Hero() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 opacity-50"
                style={{ y, opacity }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                    >
                        ¡Hola! Soy DiegoT4l
                    </motion.h1>

                    <motion.div
                        className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8"
                        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                    >
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'UI/UX Enthusiast', 'React Specialist'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
                    >
                        Creando experiencias web únicas y memorables con pasión por el diseño y la tecnología.
                    </motion.p>

                    <motion.div
                        className="flex justify-center space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
                    >
                        <motion.a
                            href="#projects"
                            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ver Proyectos
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contactar
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}


export default Hero;