import type { FC } from 'react';
import './Header.css';

interface HeaderProps {
  name: string;
}

const Header: FC<HeaderProps> = ({ name }) => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">{name}</div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="#contact" className="btn btn-primary">Book a Table</a>
      </div>
    </header>
  );
};

export default Header;