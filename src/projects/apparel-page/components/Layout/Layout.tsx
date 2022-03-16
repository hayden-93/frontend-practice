import { PropsWithChildren } from "react";

interface LayoutProps {
  className?: string;
}

export const Layout = ({ children, className }: PropsWithChildren<LayoutProps>) => {
  const classes = ["max-w-screen-mobile", className].join(" ").trim();

  return <section className={classes}>{children}</section>;
};
