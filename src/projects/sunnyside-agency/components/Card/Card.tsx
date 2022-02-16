import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

export const Card = ({ children, className, ...props }: PropsWithChildren<CardProps>) => {
  const classes = ["", className].join(" ").trim();

  return (
    <>
      <></>
    </>
  );
};
