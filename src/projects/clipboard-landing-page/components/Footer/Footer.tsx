import { PropsWithChildren } from "react";

interface FooterProps {
  className?: string;
}

export const Footer = ({ children, className, ...props }: PropsWithChildren<FooterProps>) => {
  const classes = ["bg-neutral-light-gray bg-opacity-20 py-12 mt-24", className].join(" ").trim();

  return (
    <footer className={classes} {...props}>
      <>{children}</>
    </footer>
  );
};
