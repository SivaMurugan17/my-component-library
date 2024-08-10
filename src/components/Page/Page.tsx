import React, { PropsWithChildren, ReactNode } from "react";
import "./Page.scss";

const PageContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="content">{children}</div>;
};

const PageSidebar: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};

const Page = ({ children }: { children: ReactNode }) => {
  return <div className="page">{children}</div>;
};

Page.Content = PageContent;
Page.Sidebar = PageSidebar;

export default Page;
