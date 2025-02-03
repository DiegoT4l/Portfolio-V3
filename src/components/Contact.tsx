import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import type { FormData } from '../types';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  if (error) {
    return <div>{error}</div>; // Muestra un mensaje de error
  }

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    console.log(data);
    try {
      await fetch('https://formspree.io/f/xleyzrnv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (error) {
      console.error('Error sending data:', error);
      setError('Error al enviar los datos.');
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: 'https://github.com/DiegoT4l',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/diegot4l',
      label: 'LinkedIn',
    },
    {
      icon: <Twitter size={24} />,
      url: 'https://www.x.com/diegot4l',
      label: 'Twitter',
    },
    {
      icon: <Mail size={24} />,
      url: 'mailto:contact@diegot4l.com',
      label: 'Email',
    },
  ];

  const buttonMessage = loading ? 'Enviando...' : 'Enviar Mensaje';

  if (success) {
    return (
        <section id='contact' className='py-44 bg-white dark:bg-gray-900'>
          <div className='container mx-auto px-6'>
            <motion.h2
                className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
              Contacto
            </motion.h2>

            <div ref={ref} className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
              >
                <h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  ¡Hablemos!
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-6'>
                  ¿Tienes un proyecto en mente? ¿Quieres colaborar? No dudes en
                  contactarme.
                </p>

                <div className='flex space-x-4 mb-8'>
                  {socialLinks.map((link, index) => (
                      <motion.a
                          key={link.label}
                          href={link.url}
                          target='_blank'
                          rel='noreferrer'
                          className='p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        {link.icon}
                      </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                  onSubmit={handleSubmit(onSubmit)}
                  className='space-y-6'
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
              >
                <h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  ¡Formulario Envíado! 🎉
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-6'>
                  El formulario ha sido enviado correctamente. Me pondré en contacto contigo lo antes posible.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
    )
  }

  return (
    <section id='contact' className='py-44 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-6'>
        <motion.h2
          className='text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Contacto
        </motion.h2>

        <div ref={ref} className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
              ¡Hablemos!
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-6'>
              ¿Tienes un proyecto en mente? ¿Quieres colaborar? No dudes en
              contactarme.
            </p>

            <div className='flex space-x-4 mb-8'>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target='_blank'
                  rel='noreferrer'
                  className='p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6'
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
              >
                Nombre
              </label>
              <input
                type='text'
                id='name'
                {...register('name', { required: 'El nombre es requerido' })}
                className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white'
              />
              {errors.name && (
                <span className='text-red-500 text-sm'>
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                {...register('email', {
                  required: 'El email es requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                })}
                className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white'
              />
              {errors.email && (
                <span className='text-red-500 text-sm'>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
              >
                Mensaje
              </label>
              <textarea
                id='message'
                rows={4}
                {...register('message', {
                  required: 'El mensaje es requerido',
                })}
                className='w-full px-4 py-2 field-sizing-fixed rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white'
              />
              {errors.message && (
                <span className='text-red-500 text-sm'>
                  {errors.message.message}
                </span>
              )}
            </div>

            <motion.button
              type='submit'
              disabled={loading}
              className='w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
                {buttonMessage}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
