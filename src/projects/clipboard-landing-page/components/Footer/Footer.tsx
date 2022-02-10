import { PropsWithChildren } from "react";

interface FooterProps {
  className?: string;
}

export const Footer = ({ children, className, ...props }: PropsWithChildren<FooterProps>) => {
  return (
    <>
      <>{children}</>
    </>
  );
};
