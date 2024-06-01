import './App.css';
import {MenuPosition} from './types.ts';
import hamburgerImage from './assets/hamburger.jpeg';
import cheeseburgerImage from './assets/cheeseburger.jpeg';
import friesImage from './assets/fries.jpeg';
import coffeeImage from './assets/coffee.jpeg';
import teaImage from './assets/tea.jpeg';
import colaImage from './assets/cola.jpeg';
import {useState} from 'react';
import Menu from './components/Menu/Menu.tsx';
import OrderList from './components/OrderList/OrderList.tsx';


const App = () => {

  const positions: MenuPosition[] = [
    {name: 'Hamburger', price: 250, image: hamburgerImage, count: 1},
    {name: 'Cheeseburger', price: 200, image: cheeseburgerImage, count: 1},
    {name: 'Fries', price: 100, image: friesImage, count: 1},
    {name: 'Coffee', price: 100, image: coffeeImage, count: 1},
    {name: 'Tea', price: 60, image: teaImage, count: 1},
    {name: 'Cola', price: 50, image: colaImage, count: 1},
  ];

  const [menuPositions, setMenuPosition] = useState<MenuPosition[]>([]);

  const addPosition = (newPosition: MenuPosition) => {
    const menuPositionsCopy = [...menuPositions];

    const itemIndex = menuPositionsCopy.findIndex(item => item.name === newPosition.name);

    if (itemIndex === -1) {
      menuPositionsCopy.push(newPosition);
    } else {
      menuPositionsCopy[itemIndex].count += 1;
    }

    setMenuPosition(menuPositionsCopy);
  };
  const deletePosition = (index: number): void => {
    setMenuPosition((prevMenuPosition) => {
      return prevMenuPosition.filter((_, i) => i !== index);
    });
  };

  const addTotalPrice = () => {
    return menuPositions
      .reduce((acc, position) => {
        return acc + (position.price * position.count);
      }, 0);
  };

  return (
    <div className="App">
      <Menu positions={positions} addPosition={addPosition}/>
      <OrderList menuPositions={menuPositions} deletePosition={deletePosition} addTotalPrice={addTotalPrice}/>
    </div>
  );
};


export default App;
