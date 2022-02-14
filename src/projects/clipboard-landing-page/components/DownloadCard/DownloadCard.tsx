import { PropsWithChildren } from "react";

interface DownloadCardProps {
  className?: string;
}

export const DownloadCard = ({ children, className }: PropsWithChildren<DownloadCardProps>) => {
  const classes = ["max-w-screen-xs mx-auto text-center space-y-4", className].join(" ").trim();

  return <div className={classes}>{children}</div>;
};

interface DownloadCardTitleProps {
  className?: string;
}

const DownloadCardTitle = ({ className }: DownloadCardTitleProps) => {
  const classes = ["text-3xl text-clipboard-dark-grayish-blue", className].join(" ").trim();

  return <h2 className={classes}>A history of everything you copy</h2>;
};

interface DownloadCardDescriptionProps {
  className?: string;
}

const DownloadCardDescription = ({ className }: DownloadCardDescriptionProps) => {
  const classes = ["text-sm text-clipboard-grayish-blue", className].join(" ").trim();

  return (
    <p className={classes}>
      Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your
      devices.
    </p>
  );
};
interface DownloadCardButtonProps {
  className?: string;
}

const DownloadCardButton = ({ children, className }: PropsWithChildren<DownloadCardButtonProps>) => {
  const classes = ["text-white py-2 px-6 text-sm rounded-full shadow border-b", className].join(" ").trim();

  return (
    <>
      <button className={classes}>{children}</button>
    </>
  );
};

DownloadCard.Title = DownloadCardTitle;
DownloadCard.Description = DownloadCardDescription;
DownloadCard.Button = DownloadCardButton;
