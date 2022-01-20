import { ReactNode } from "react";

interface CardSeperatorProps {
  className?: string;
}

export const CardSeperator = ({ className }: CardSeperatorProps) => {
  const classes = ["h-px my-4 text-neutral-line-dark-blue", className].join(" ").trim();
  return <hr className={classes}></hr>;
};
