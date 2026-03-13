import type { FC } from 'react';
import './About.css';

interface AboutProps {
  summary: string;
}

const About: FC<AboutProps> = ({ summary }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <p>{summary}</p>
      </div>
    </section>
  );
};

export default About;