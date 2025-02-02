import { motion, useScroll } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParallaxWrapper from './components/shared/ParallaxWrapper';


function App() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            <Header />
            <main>
                <Hero />
                <ParallaxWrapper offset={100}>
                    <About />
                </ParallaxWrapper>
                <ParallaxWrapper offset={100} direction="down">
                    <Experience />
                </ParallaxWrapper>
                <ParallaxWrapper offset={100}>
                    <Projects />
                </ParallaxWrapper>
                <ParallaxWrapper offset={100}>
                    <Skills />
                </ParallaxWrapper>
                <ParallaxWrapper offset={100} direction='down'>
                    <Contact />
                </ParallaxWrapper>
            </main>
            <Footer />
        </div>
    );
}

export default App;
