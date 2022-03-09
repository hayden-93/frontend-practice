import { PropsWithChildren } from "react";

interface ButtonProps {
  className?: string;
}

export const Button = ({ className }: PropsWithChildren<ButtonProps>) => {
  const classes = ["", className].join(" ").trim();

  return (
    <>
      <></>
    </>
  );
};
