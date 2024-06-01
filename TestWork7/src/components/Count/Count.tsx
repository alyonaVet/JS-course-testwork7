import React from 'react';

interface CountProps {
  itemCount: number;
}
const Count: React.FC<CountProps> = ({itemCount}) => {
  return (
    <div className="itemCount">x{itemCount}</div>
  );
};

export default Count;