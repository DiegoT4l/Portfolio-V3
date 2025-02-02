import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-50 dark:bg-gray-800 py-32'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
              Portfolio
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Creando experiencias web únicas y memorables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
              Enlaces Rápidos
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                >
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white'>
              Contacto
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-2'>
              email@example.com
            </p>
            <p className='text-gray-600 dark:text-gray-300'>Ciudad, País</p>
          </motion.div>
        </div>

        <motion.div
          className='border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>&copy; {currentYear} Portfolio. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
