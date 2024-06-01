import React from 'react';
import {MenuPosition} from '../../types.ts';
import Count from './Count/Count.tsx';
import DeleteButton from './DeleteButton/DeleteButton.tsx';
import './OrderList.css';
import Price from './Price/Price.tsx';
import IncrementButton from './IncrementButton/IncrementButton.tsx';
interface OrderProps {
  menuPositions: MenuPosition[];
  deletePosition: (index: number) => void;
  addTotalPrice: () => number;
  changeItemCount: (itemIndex:number, step:number) => void;
}

const OrderList: React.FC<OrderProps> = ({menuPositions, deletePosition, addTotalPrice, changeItemCount}) => {

  return (
    <div className="order-items">
      {
        menuPositions.length === 0 &&
        <div className="textMessage">Order is empty! Please add items you want!</div>
      }
      {menuPositions.map((position, index) => (

        <div className="items" key={index}>
          <span className="item-name">{position.name}</span>
          <div className="item-numbers">
            <Count itemCount={position.count}/>
            <div>{position.price * position.count}</div>
          </div>
          <IncrementButton increment={() => changeItemCount(index, 1)} decrement={()=> changeItemCount(index, -1)}/>
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