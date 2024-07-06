import { ReactNode } from "react";
import "./Button.scss";

const Button = ({
  variant,
  children,
  onClick,
}: {
  variant: string;
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
