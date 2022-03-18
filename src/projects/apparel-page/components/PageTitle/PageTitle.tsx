import { PropsWithChildren } from "react";

interface PageTitleProps {
  className?: string;
}

export const PageTitle = ({ children, className }: PropsWithChildren<PageTitleProps>) => {
  const classes = ["", className].join(" ").trim();

  return <h2 className={classes}>{children}</h2>;
};
