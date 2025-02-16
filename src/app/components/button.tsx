import React from "react";

interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  customstyle?: string;
  icon?: string;
  isDisabled?: boolean;
  type: "button" | "submit" | "reset";
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  customstyle,
  isDisabled,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-1 border border-blue-1 text-blue-1 transition-all duration-300 ease-in-out ${customstyle}`}
      disabled={isDisabled}
    >
      {icon && <span className="mr-1">{icon}</span>} {text}
    </button>
  );
};

export default CustomButton;
