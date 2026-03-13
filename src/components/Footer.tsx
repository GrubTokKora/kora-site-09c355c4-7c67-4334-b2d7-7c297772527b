import type { FC } from 'react';
import './Footer.css';

interface FooterProps {
  name: string;
}

const Footer: FC<FooterProps> = ({ name }) => {
  return (
    <footer className="site-footer-bottom">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;