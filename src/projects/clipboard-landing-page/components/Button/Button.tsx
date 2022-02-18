import { PropsWithChildren } from "react";

interface ButtonProps {
  className?: string;
}

export const Button = ({ children, className }: PropsWithChildren<ButtonProps>) => {
  const classes = ["text-white py-3 px-8 font-medium rounded-full shadow border-b", className].join(" ").trim();

  return (
    <>
      <button className={classes}>{children}</button>
    </>
  );
};
