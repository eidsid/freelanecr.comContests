import React from "react";

const Button = ({ label, onClick }) => {
  // Your button component logic here
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
