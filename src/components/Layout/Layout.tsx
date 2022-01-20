import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  const classes = ["max-w-screen-mobile mx-auto font-sans py-16", className].join(" ").trim();
  return <div className={classes}>{children}</div>;
};
