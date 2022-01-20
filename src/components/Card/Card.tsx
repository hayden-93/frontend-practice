import { ReactNode } from "react";
import { Avatar } from "../Avatar/Avatar";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  const classes = ["bg-neutral-card-dark-blue mx-auto p-8 rounded-2xl", className].join(" ").trim();
  return <div className={classes}>{children}</div>;
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage = ({ src, alt, className }: CardImageProps) => {
  const classes = ["rounded-2xl", className].join(" ").trim();

  return <img src={src} alt={alt} className={classes} />;
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  const classes = ["text-white text-2xl font-bold hover:text-primary-cyan cursor-pointer", className].join(" ").trim();
  return <h3 className={classes}>{children}</h3>;
};
interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
  const classes = ["text-primary-soft-blue text-lg font-light", className].join(" ").trim();
  return <p className={classes}>{children}</p>;
};
interface CardPriceProps {
  children: ReactNode;
  className?: string;
}

export const CardPrice = ({ children, className }: CardPriceProps) => {
  const classes = ["text-sm", className].join(" ").trim();
  return <span className={classes}>{children}</span>;
};

interface CardDeadlineProps {
  children: ReactNode;
  className?: string;
}

export const CardDeadline = ({ children, className }: CardDeadlineProps) => {
  const classes = ["text-sm", className].join(" ").trim();
  return <span className={classes}>{children}</span>;
};

interface CardProfileProps {
  children: ReactNode;
  className?: string;
}

export const CardProfile = ({ children, className }: CardProfileProps) => {
  const classes = ["flex items-center space-x-4", className].join(" ").trim();
  return <div className={classes}>{children}</div>;
};

interface CardProfileNameProps {
  children: ReactNode;
  className?: string;
}

export const CardProfileName = ({ children, className }: CardProfileNameProps) => {
  const classes = ["text-primary-soft-blue", className].join(" ").trim();
  return <p className={classes}>{children}</p>;
};
