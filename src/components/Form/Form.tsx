import React, { PropsWithChildren, ReactNode } from "react";
import "./Form.scss";

const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <h3>{children}</h3>
);

const Label: React.FC<PropsWithChildren> = ({ children }) => (
  <label>{children}</label>
);

const Input: React.FC = () => <input />;

const Form = ({ children }: { children?: ReactNode }) => {
  return <form className="form">{children}</form>;
};

Form.Header = Header;
Form.Label = Label;
Form.Input = Input;

export default Form;
