import React from 'react';
import {MenuPosition, PositionCount} from '../../types.ts';
import Position from '../Position/Position.tsx';

interface MenuProps {
  positions: MenuPosition[];
  addPosition: (index: number) => void;
  menuPositions: PositionCount[];
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
          onClick={() => addPosition(index)}
        />
      ))}
    </div>
  );
};

export default Menu;