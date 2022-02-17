import { PropsWithChildren } from "react";

interface DownloadCardProps {
  className?: string;
}

export const DownloadCard = ({ children, className }: PropsWithChildren<DownloadCardProps>) => {
  const classes = ["max-w-screen-sm mx-auto text-center space-y-4", className].join(" ").trim();

  return <div className={classes}>{children}</div>;
};

interface DownloadCardTitleProps {
  className?: string;
}

const DownloadCardTitle = ({ children, className }: PropsWithChildren<DownloadCardTitleProps>) => {
  const classes = ["text-5xl font-semibold text-clipboard-dark-grayish-blue", className].join(" ").trim();

  return <h2 className={classes}>{children}</h2>;
};

interface DownloadCardDescriptionProps {
  className?: string;
}

const DownloadCardDescription = ({ children, className }: PropsWithChildren<DownloadCardDescriptionProps>) => {
  const classes = ["text-lg text-clipboard-grayish-blue", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};

DownloadCard.Title = DownloadCardTitle;
DownloadCard.Description = DownloadCardDescription;
