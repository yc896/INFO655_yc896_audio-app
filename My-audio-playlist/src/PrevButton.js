import React from 'react';

const PrevButton = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick(event);
  };

  return (
    <button onClick={handleClick}>
      Prev
    </button>
  );
};

export default PrevButton;