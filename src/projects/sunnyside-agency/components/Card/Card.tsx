import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

export const Card = ({ children, className, ...props }: PropsWithChildren<CardProps>) => {
  const classes = ["text-center space-y-12", className].join(" ").trim();

  return (
    <div className={classes} {...props}>
      <>{children}</>
    </div>
  );
};

interface CardDescriptionProps {
  className?: string;
}

const CardDescription = ({ children, className }: PropsWithChildren<CardDescriptionProps>) => {
  const classes = ["px-16 text-sunny-very-dark-grayish-blue text-lg font-bold opacity-80", className].join(" ").trim();

  return (
    <>
      <p className={classes}>{children}</p>
    </>
  );
};

interface CardAuthorProps {
  className?: string;
}

const CardAuthor = ({ children, className }: PropsWithChildren<CardAuthorProps>) => {
  const classes = ["text-xl font-black", className].join(" ").trim();

  return (
    <>
      <p className={classes}>{children}</p>
    </>
  );
};
interface CardJobTitleProps {
  className?: string;
}

const CardJobTitle = ({ children, className }: PropsWithChildren<CardJobTitleProps>) => {
  const classes = ["text-sm text-sunny-grayish-blue font-bold py-2", className].join(" ").trim();

  return (
    <>
      <p className={classes}>{children}</p>
    </>
  );
};

Card.Description = CardDescription;
Card.Author = CardAuthor;
Card.JobTitle = CardJobTitle;
