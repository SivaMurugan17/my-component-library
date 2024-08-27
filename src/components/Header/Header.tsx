import React, { PropsWithChildren, ReactNode, useState } from "react";
import "./Header.scss";

const Link: React.FC<PropsWithChildren> = ({ children }) => (
  <li>
    <a>{children}</a>
  </li>
);

const Sidebar = ({ links }: { links: ReactNode }) => {
  return (
    <div className="navigation-sidebar">
      <ul>{links}</ul>
    </div>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <div className="header">
      <nav className="navigation">
        <h1>Brand</h1>
        <ul className="desktop-links">{children}</ul>
        <span className="hamburger-icon">
          <button onClick={() => setIsSidebarActive(!isSidebarActive)}>
            X
          </button>
        </span>
      </nav>
      {isSidebarActive ? <Sidebar links={children} /> : null}
    </div>
  );
};

Header.Link = Link;

export default Header;
