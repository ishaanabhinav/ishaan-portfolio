import { createContext } from 'react';
import type { ThemeMode } from '@/types';

export interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export const THEME_STORAGE_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
