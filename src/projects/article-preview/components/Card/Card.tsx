import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

export const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  const classes = ["max-w-screen-mobile mx-auto py-16 space-y-8 rounded-xl bg-white", className].join(" ").trim();

  return <section className={classes}>{children}</section>;
};

interface CardImageProps {
  alt?: string;
  className?: string;
  src?: string;
}

const CardImage = ({ alt, className, src }: CardImageProps) => {
  const classes = ["overflow-hidden", className].join(" ").trim();

  return <img src={src} alt={alt} className={classes} />;
};

interface CardHeadingProps {
  className?: string;
}

const CardHeading = ({ children, className }: PropsWithChildren<CardHeadingProps>) => {
  const classes = ["px-8 text-article-dark-grayish-blue text-lg font-medium", className].join(" ").trim();

  return <h5 className={classes}>{children}</h5>;
};

interface CardDescriptionProps {
  className?: string;
}

const CardDescription = ({ children, className }: PropsWithChildren<CardDescriptionProps>) => {
  const classes = ["px-8 text-article-desat-dark-blue text-sm", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};

Card.Description = CardDescription;
Card.Heading = CardHeading;
Card.Image = CardImage;
