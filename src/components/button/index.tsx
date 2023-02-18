import React from "react";

import "./styles.scss";

interface IButton {
  text: string;
  onClick: () => void;
  styles: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

export const Button: React.FC<IButton> = ({
  text,
  onClick,
  styles,
  disabled,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button__${styles} button`}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};
