import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  const classes = ["", className].join(" ").trim();
  return <div className={classes}>{children}</div>;
};
