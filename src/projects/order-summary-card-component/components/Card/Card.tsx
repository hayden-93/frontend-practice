import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

export const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  const classes = ["", className].join(" ").trim();

  return (
    <>
      <>{children}</>
    </>
  );
};

interface CardImage {
  alt: string;
  className?: string;
  src: string;
}

const CardImage = ({ alt, className, src }: CardImage) => {
  const classes = ["", className].join(" ").trim();

  return <img src={src} alt={alt} className={classes} />;
};

interface CardTitle {
  className?: string;
}

const CardTitle = ({ className }: CardTitle) => {
  const classes = ["", className].join(" ").trim();

  return <h3 className={classes} />;
};

interface CardDescription {
  className?: string;
}

const CardDescription = ({ children, className }: PropsWithChildren<CardDescription>) => {
  const classes = ["", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};
