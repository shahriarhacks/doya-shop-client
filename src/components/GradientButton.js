import React from "react";

const GradientButton = ({ children }) => {
  return (
    <button className="btn btn-outline hover:rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
      {children}
    </button>
  );
};

export default GradientButton;
