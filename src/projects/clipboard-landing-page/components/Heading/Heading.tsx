import { PropsWithChildren } from "react";

interface HeadingProps {
  className?: string;
}

export const Heading = ({ children, className }: PropsWithChildren<HeadingProps>) => {
  const classes = ["max-w-screen-lg font-semibold text-clipboard-dark-grayish-blue", className].join(" ").trim();
  return <h2 className={classes}>{children}</h2>;
};

interface HeadingDescriptionProps {
  className?: string;
}

const HeadingDescription = ({ children, className }: PropsWithChildren<HeadingDescriptionProps>) => {
  const classes = ["leading-normal text-clipboard-grayish-blue font-light", className].join(" ").trim();
  return <p className={classes}>{children}</p>;
};

Heading.Description = HeadingDescription;
