import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  const classes = ["", className].join(" ").trim();
  return <div className={classes}>{children}</div>;
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage = ({ src, alt, className }: CardImageProps) => {
  const classes = ["", className].join(" ").trim();

  return <img src={src} alt={alt} className={classes} />;
};
