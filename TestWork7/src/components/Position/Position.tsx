import React from 'react';
import './Position.css';

interface Props {
  type: 'button' | 'submit' | 'reset';
  className: string;
  name: string;
  price: number;
  image: string;
  onClick: React.MouseEventHandler;
}

const Position: React.FC<Props> = ({className, type, name, price, image, onClick}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <div>
        <img src={image} alt={name} className="positionImg"/>
      </div>
      <div>
        <div className="position-name">{name}</div>
        <div>Price: {price} KGS</div>
      </div>
    </button>
  );
};

export default Position;