import { ReactNode } from "react";
import "./Navbar.scss";

export const Navbar = ({ children }: { children: ReactNode }) => {
  return <nav className="Navbar ">{children}</nav>;
};
