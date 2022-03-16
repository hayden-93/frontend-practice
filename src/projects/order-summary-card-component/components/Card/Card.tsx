import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

export const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  const classes = ["max-w-screen-mobile mx-auto bg-white", className].join(" ").trim();

  return (
    <section className={classes}>
      <>{children}</>
    </section>
  );
};

interface CardImage {
  alt: string;
  className?: string;
  src: string;
}

const CardImage = ({ alt, className, src }: CardImage) => {
  const classes = ["rounded-2xl", className].join(" ").trim();

  return <img src={src} alt={alt} className={classes} />;
};

interface CardTitle {
  className?: string;
}

const CardTitle = ({ children, className }: PropsWithChildren<CardTitle>) => {
  const classes = ["", className].join(" ").trim();

  return <h3 className={classes}>{children}</h3>;
};

interface CardDescription {
  className?: string;
}

const CardDescription = ({ children, className }: PropsWithChildren<CardDescription>) => {
  const classes = ["", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Description = CardDescription;
