// src/components/DarkModeToggle.jsx
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const updateTheme = (isDarkMode) => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    setDarkMode(isDarkMode);
  };

  useEffect(() => {
    // Hämta sparat tema från localStorage eller systemets preferens
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    updateTheme(savedTheme === 'dark');

    // Lyssna på systemets färgschemapreferens
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      if (!localStorage.getItem('theme')) {
        updateTheme(event.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);

    // Rensa lyssnaren vid avmontering
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Hantera när användaren byter tema
  const handleToggle = () => {
    const isDarkMode = !darkMode;
    updateTheme(isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
      <span className="label">Dark mode</span>
      <label htmlFor="darkmode-switch" className="toggle-switch">
        <input
          id="darkmode-switch"
          type="checkbox"
          checked={darkMode}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
