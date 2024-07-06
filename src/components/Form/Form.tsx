import React, { PropsWithChildren, ReactNode } from "react";
import "./Form.scss";

const Label: React.FC<PropsWithChildren> = ({ children }) => (
  <label>{children}</label>
);

const Input: React.FC = () => <input />;

const Form = ({ children }: { children?: ReactNode }) => {
  return <form className="form">{children}</form>;
};

Form.Label = Label;
Form.Input = Input;

export default Form;
