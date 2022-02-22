import { PropsWithChildren } from "react";

interface ButtonProps {
  className?: string;
}

export const Button = ({ children, className }: PropsWithChildren<ButtonProps>) => {
  const classes = ["text-lg text-white py-3 px-10 font-medium rounded-full shadow-md", className].join(" ").trim();

  return (
    <>
      <button className={classes}>{children}</button>
    </>
  );
};
