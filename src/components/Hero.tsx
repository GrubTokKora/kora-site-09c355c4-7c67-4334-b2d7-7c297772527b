import type { FC } from 'react';
import './Hero.css';

interface HeroProps {
  name: string;
  tagline: string;
}

const Hero: FC<HeroProps> = ({ name, tagline }) => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>{name}</h1>
        <p>{tagline}</p>
        <a href="#contact" className="btn btn-primary">Book Your Table Now</a>
      </div>
    </section>
  );
};

export default Hero;