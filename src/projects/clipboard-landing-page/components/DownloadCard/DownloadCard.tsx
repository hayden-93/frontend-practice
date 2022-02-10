import { PropsWithChildren } from "react";

interface DownloadCardProps {
  className?: string;
}

export const DownloadCard = ({ children, className }: PropsWithChildren<DownloadCardProps>) => {
  const classes = ["", className].join(" ").trim();

  return <div>{children}</div>;
};

interface DownloadCardTitleProps {
  className?: string;
}

const DownloadCardTitle = ({ className }: DownloadCardTitleProps) => {
  const classes = ["", className].join(" ").trim();

  return <h2>A history of everything you copy</h2>;
};

interface DownloadCardDescriptionProps {
  className?: string;
}

const DownloadCardDescription = ({ className }: DownloadCardDescriptionProps) => {
  const classes = ["", className].join(" ").trim();

  return (
    <p>
      Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your
      devices.
    </p>
  );
};
interface DownloadCardButtonProps {
  className?: string;
}

const DownloadCardButton = ({ className }: DownloadCardButtonProps) => {
  const classes = ["", className].join(" ").trim();

  return (
    <>
      <button>Download for iOS</button>
      <button>Download for Mac</button>
    </>
  );
};

DownloadCard.Title = DownloadCardTitle;
DownloadCard.Description = DownloadCardDescription;
DownloadCard.Button = DownloadCardButton;
