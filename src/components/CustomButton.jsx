import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ title, handleclick, type, customStyles }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        backgroundColor: "transparent",
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md transition-all duration-300 ease-in-out 
                  hover:bg-opacity-80 hover:scale-105 
                  ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleclick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
