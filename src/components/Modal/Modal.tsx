import React, { PropsWithChildren, ReactNode } from "react";
import "./Modal.scss";

const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <h3>{children}</h3>
);

const Body: React.FC<PropsWithChildren> = ({ children }) => <p>{children}</p>;

const Modal = ({ open, children }: { open: boolean; children?: ReactNode }) => {
  if (!open) return null;
  return <div className="modal">{children}</div>;
};

Modal.Header = Header;
Modal.Body = Body;

export default Modal;
