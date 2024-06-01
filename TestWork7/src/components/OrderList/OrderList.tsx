import React from 'react';
import {MenuPosition} from '../../types.ts';
import Count from '../Count/Count.tsx';
import DeleteButton from '../DeleteButton/DeleteButton.tsx';
import './OrderList.css';
import Price from '../Price/Price.tsx';
interface OrderProps {
  menuPositions: MenuPosition[];
  deletePosition: (index: number) => void;
  addTotalPrice: () => number;
}

const OrderList: React.FC<OrderProps> = ({menuPositions, deletePosition, addTotalPrice}) => {

  return (
    <div className="order-items">
      {
        menuPositions.length === 0 &&
        <div className="textMessage">Order is empty! Please add items you want!</div>
      }
      {menuPositions.map((position, index) => (
        <div className="items" key={index}>
          <span className="item-name">{position.name}</span>
          <Count itemCount={position.count}/>
          <div>{position.price * position.count}</div>
          <DeleteButton onClick={() => deletePosition(index)}/>
        </div>
      ))}
      {
        menuPositions.length > 0 &&
        <Price addTotalPrice={() => addTotalPrice()}/>
      }
    </div>
  );
};

export default OrderList;