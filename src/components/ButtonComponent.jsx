import React from "react";

const ButtonComponent = ({ value, color, handleClick }) => {
  return (
    <button
      className={`w-20 h-20 bg-${color} text-white text-3xl hover:border`}
      onClick={handleClick}
      value={value}
    >
      {value}
    </button>
  );
};

export default ButtonComponent;
