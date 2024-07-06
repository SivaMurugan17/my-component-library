import { ReactNode } from "react";
import "./Page.scss";

const Page = ({ children }: { children: ReactNode }) => {
  return <div className="page">{children}</div>;
};

export default Page;
