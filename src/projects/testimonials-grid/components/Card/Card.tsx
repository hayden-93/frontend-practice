import type { PropsWithChildren } from "react";

interface CardProps {
  bg?: keyof typeof cardBgVariants;
  className?: string;
}

const cardBgVariants = {
  white: "bg-neutral-1",
  gray: "bg-neutral-3",
  darkGray: "bg-neutral-4",
  darkBlue: "bg-neutral-5",
  violet: "bg-violet",
} as const;

export const Card = ({ bg = "white", children, className, ...props }: PropsWithChildren<CardProps>) => {
  const classes = ["rounded-xl overflow-hidden p-8 space-y-4", cardBgVariants[bg], className].join(" ").trim();

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
};

interface CardHeaderProps {
  className?: string;
}

const CardHeader = ({ children, className, ...props }: PropsWithChildren<CardHeaderProps>) => {
  const classes = ["", className].join(" ").trim();

  return (
    <header className={classes} {...props}>
      {children}
    </header>
  );
};

interface CardContentProps {
  className?: string;
}

const CardContent = ({ children, className, ...props }: PropsWithChildren<CardContentProps>) => {
  const classes = ["space-y-4", className].join(" ").trim();

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

interface CardTitleProps {
  className?: string;
  color?: keyof typeof cardTitleColorVariants;
}

const cardTitleColorVariants = {
  light: "text-neutral-1",
  dark: "text-neutral-5",
};

const CardTitle = ({ children, className, color = "light", ...props }: PropsWithChildren<CardTitleProps>) => {
  const classes = ["text-xl font-medium md:text-xl", cardTitleColorVariants[color], className].join(" ").trim();

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  className?: string;
  color?: keyof typeof cardDescriptionColorVariants;
}

const cardDescriptionColorVariants = {
  light: "text-neutral-2",
  dark: "text-neutral-4",
};

const CardDescription = ({
  children,
  className,
  color = "light",
  ...props
}: PropsWithChildren<CardDescriptionProps>) => {
  const classes = ["text-sm font-extralight opacity-70", cardDescriptionColorVariants[color], className]
    .join(" ")
    .trim();

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
