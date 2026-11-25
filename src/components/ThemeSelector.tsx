import React, { useEffect, useState } from 'react';

export type ThemeName = 'dark' | 'light' | 'cyberpunk' | 'gaming';

const THEME_STORAGE_KEY = 'portfolio.theme';

const THEMES: Array<{ id: ThemeName; label: string; icon: string }> = [
  { id: 'dark', label: 'Dark', icon: 'dark_mode' },
  { id: 'light', label: 'Light', icon: 'light_mode' },
  { id: 'cyberpunk', label: 'Cyberpunk', icon: 'bolt' },
  { id: 'gaming', label: 'Gaming', icon: 'sports_esports' }
];

export const ThemeSelector: React.FC = () => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null;
    return THEMES.some((item) => item.id === storedTheme) ? storedTheme! : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <label className="theme-selector theme-selector-circle relative flex items-center justify-center rounded-full" title={`Theme: ${THEMES.find((item) => item.id === theme)?.label}. Click to change`}>
      <span className="material-symbols-outlined text-sm text-[#00f0ff]">palette</span>
      <select
        value={theme}
        onChange={(event) => setTheme(event.target.value as ThemeName)}
        aria-label="Choose visual theme"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        {THEMES.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
      </select>
    </label>
  );
};
