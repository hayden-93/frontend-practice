import { PropsWithChildren } from "react";

interface PageContentProps {
  className?: string;
}

export const PageContent = ({ children, className }: PropsWithChildren<PageContentProps>) => {
  const classes = ["", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};
