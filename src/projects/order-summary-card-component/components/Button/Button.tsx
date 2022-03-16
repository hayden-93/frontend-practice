import { PropsWithChildren } from "react";

interface ButtonProps {
  className?: string;
}

export const Button = ({ children, className }: PropsWithChildren<ButtonProps>) => {
  const classes = ["", className].join(" ").trim();

  return <button className={classes}>{children}</button>;
};
