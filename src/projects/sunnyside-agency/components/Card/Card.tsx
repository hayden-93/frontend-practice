import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

export const Card = ({ children, className, ...props }: PropsWithChildren<CardProps>) => {
  const classes = ["max-w-screen-desktop mx-auto h-screen", className].join(" ").trim();

  return (
    <div className={classes} {...props}>
      <>{children}</>
    </div>
  );
};

interface CardAvatarProps {
  className?: string;
  src: string;
  alt: string;
}

const CardAvatar = ({ alt, className, src }: PropsWithChildren<CardAvatarProps>) => {
  const classes = ["", className].join(" ").trim();

  return (
    <>
      <img className={classes} src={src} alt={alt} />
    </>
  );
};

interface CardDescriptionProps {
  className?: string;
}

const CardDescription = ({ children, className }: PropsWithChildren<CardDescriptionProps>) => {
  const classes = ["", className].join(" ").trim();

  return (
    <>
      <p>{children}</p>
    </>
  );
};

interface CardAuthorProps {
  className?: string;
}

const CardAuthor = ({ children, className }: PropsWithChildren<CardAuthorProps>) => {
  const classes = ["", className].join(" ").trim();

  return (
    <>
      <p>{children}</p>
    </>
  );
};
interface CardJobTitleProps {
  className?: string;
}

const CardJobTitle = ({ children, className }: PropsWithChildren<CardJobTitleProps>) => {
  const classes = ["", className].join(" ").trim();

  return (
    <>
      <p>{children}</p>
    </>
  );
};

Card.Avatar = CardAvatar;
Card.Description = CardDescription;
Card.Author = CardAuthor;
Card.JobTitle = CardJobTitle;
