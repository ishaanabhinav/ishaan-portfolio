import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Hero } from '@/components/sections/Hero';
import { ThemeProvider } from '@/context/ThemeContext';

const renderHero = () =>
  render(
    <HelmetProvider>
      <ThemeProvider>
        <MemoryRouter>
          <Hero />
        </MemoryRouter>
      </ThemeProvider>
    </HelmetProvider>,
  );

describe('<Hero />', () => {
  it('shows the headline with the name', () => {
    renderHero();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Hi, I/i);
  });

  it('renders CTA buttons', () => {
    renderHero();
    expect(screen.getByRole('link', { name: /view my work/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /let.s talk/i })).toBeInTheDocument();
  });
});
