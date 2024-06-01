import React from 'react';
import {MenuPosition} from '../../types.ts';
import Position from './Position/Position.tsx';
import './Menu.css';

interface MenuProps {
  positions: MenuPosition[];
  addPosition: (position: MenuPosition) => void;
}

const Menu: React.FC<MenuProps> = ({positions, addPosition,}) => {
  return (
    <div className="position-items">
      {positions.map((position, index) => (
        <Position
          key={index}
          className="positionBtn"
          name={position.name}
          price={position.price}
          image={position.image}
          type="button"
          onClick={() => addPosition(position)}
        />
      ))}
    </div>
  );
};

export default Menu;