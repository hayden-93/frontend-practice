import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  const classes = ["bg-order-summary-mobile bg-no-repeat bg-cover h-screen py-24", className].join(" ").trim();

  return <div className={classes}>{children}</div>;
};
