import React from 'react';
import './DeleteButton.css';

interface DeleteButtonProps {
  onClick: () => void;
}
const DeleteButton: React.FC<DeleteButtonProps> = ({onClick}) => {
  return (
    <button className="deleteBtn" onClick={onClick}>Delete</button>
  );
};

export default DeleteButton;