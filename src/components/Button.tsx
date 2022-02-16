import React from "react";
import "./Button.css";

type ButtonProps = {
  buttonText: string;
  isPrimary: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  buttonText,
  isPrimary,
  onClick,
}): JSX.Element => {
  const className = isPrimary
    ? "Button_common Button_primary"
    : "Button_common";
  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
