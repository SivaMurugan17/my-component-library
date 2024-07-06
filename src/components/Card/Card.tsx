import { PropsWithChildren, ReactNode } from "react";
import "./Card.scss";

const Header: React.FC<PropsWithChildren> = ({ children }) => (
  <h3>{children}</h3>
);

const Body: React.FC<PropsWithChildren> = ({ children }) => <p>{children}</p>;

const Card = ({ children }: { children?: ReactNode }) => {
  return <div className="card">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;

export default Card;
