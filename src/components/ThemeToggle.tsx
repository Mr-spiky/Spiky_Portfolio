'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted before showing UI (avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
      aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-yellow-300" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
}