import React from "react";
import "./Button.scss";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={`Button`} onClick={onClick}>
      {children}
    </button>
  );
};
