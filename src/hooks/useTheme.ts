import { useEffect, useCallback } from 'react';
import useLocalStorage from './useLocalStorage'; // Ajusta la ruta según tu estructura de carpetas

type Theme = 'light' | 'dark';

export const useTheme = () => {
  // Usamos useLocalStorage para manejar el tema
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');

  // Aplicar el tema al documento y sincronizar con localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Función para alternar el tema
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  // Escuchar cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setTheme]);

  return { theme, toggleTheme };
};
