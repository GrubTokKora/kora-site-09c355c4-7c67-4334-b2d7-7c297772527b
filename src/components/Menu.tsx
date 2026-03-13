import type { FC } from 'react';
import './Menu.css';

interface MenuProps {
  cuisine: string[];
}

const Menu: FC<MenuProps> = ({ cuisine }) => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2>Our Menu</h2>
        <p className="menu-intro">
          Discover our exquisite selection of {cuisine.join(', ')} dishes, crafted with the freshest ingredients.
        </p>
        <div className="menu-placeholder">
          <p>Full menu coming soon.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;