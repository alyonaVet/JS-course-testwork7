import './IncrementButton.css';
import React from 'react';

interface IncrementButtonProps {
  increment: () => void;
  decrement: () => void;
}
const IncrementButton: React.FC<IncrementButtonProps> = ({increment, decrement}) => {
  return (
    <div className="incrementBtn">
      <button onClick={()=>decrement()} className="partBtn">-</button>
      <button onClick={()=>increment()} className="partBtn plusBtn">+</button>
    </div>
  );
};

export default IncrementButton;