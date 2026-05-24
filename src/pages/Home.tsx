import { Seo } from '@/components/Seo';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';

export const Home = () => (
  <>
    <Seo />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Education />
    <Blog />
    <Contact />
  </>
);
