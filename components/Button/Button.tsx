import React from "react";
import "./button.css";

export interface ButtonProps {
  label: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "text" | "outlined";
  disabled?: boolean;
  background?: string;
  height?: number | string;
  width?: number | string;
  margin?: number | string;
  padding?: number | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonCustomStyles {
  background?: string;
  height?: number | string;
  width?: number | string;
  margin?: number | string;
  padding?: number | string;
}

const Button = ({
  label,
  size = "md",
  variant = "primary",
  disabled,
  background,
  height,
  width,
  margin,
  padding,
  onClick,
}: ButtonProps) => {
  const getCssClasses = () => {
    return `btn btn-${variant} btn-${size}` + (disabled ? " btn-disabled" : "");
  };

  const getCustomStyles = () => {
    const styles: ButtonCustomStyles = {};
    if (background) {
      styles.background = background;
    }
    if (height || height === 0) {
      styles.height = typeof height === "number" ? height + "px" : height;
    }
    if (width || width === 0) {
      styles.width = typeof width === "number" ? width + "px" : width;
    }
    if (padding || padding === 0) {
      styles.padding = typeof padding === "number" ? padding + "px" : padding;
    }
    if (margin || margin === 0) {
      styles.margin = typeof margin === "number" ? margin + "px" : margin;
    }

    return styles;
  };

  return (
    <button
      style={getCustomStyles()}
      className={getCssClasses()}
      onClick={onClick}
      disabled={disabled ?? false}
    >
      {label}
    </button>
  );
};

export default Button;
