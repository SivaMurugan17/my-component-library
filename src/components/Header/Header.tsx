import { PropsWithChildren, ReactNode } from "react";
import "./Header.scss";

const Title: React.FC<PropsWithChildren> = ({ children }) => (
  <h1 className="title">{children}</h1>
);

const Link = ({ children, to }: { children: ReactNode; to: string }) => (
  <a className="link" href={to}>
    {children}
  </a>
);

const Header = ({ children }: { children?: ReactNode }) => {
  return <div className="header">{children}</div>;
};

Header.Title = Title;
Header.Link = Link;

export default Header;
