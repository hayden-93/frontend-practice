import { PropsWithChildren } from "react";

interface ButtonProps {
  className?: string;
}

export const Button = ({ children, className }: PropsWithChildren<ButtonProps>) => {
  const classes = ["text-white py-2 px-6 text-sm rounded-full shadow border-b", className].join(" ").trim();

  return (
    <>
      <button className={classes}>{children}</button>
    </>
  );
};
