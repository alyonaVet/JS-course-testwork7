import React from 'react';
import './Price.css';

interface PriceProps {
  addTotalPrice: () => number;
}
const Price: React.FC<PriceProps> = ({addTotalPrice}) => {
  return (
    <div className="price">Total price: {addTotalPrice()}</div>
  );
};

export default Price;