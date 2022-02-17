import { PropsWithChildren } from "react";

interface HeaderProps {
  className?: string;
}

export const Header = ({ children, className, ...props }: PropsWithChildren<HeaderProps>) => {
  const classes = ["bg-header-image bg-no-repeat bg-center", className].join(" ").trim();
  return (
    <header className={classes}>
      <img src="/clipboard-landing-page/bg-header-desktop.png" alt="Desktop Header Background" />
      {children}
    </header>
  );
};

interface HeaderLogoProps {
  className?: string;
  src: string;
  alt: string;
}

const HeaderLogo = ({ className, ...props }: HeaderLogoProps) => {
  const classes = ["", className].join(" ").trim();
  return <img className={classes} {...props} />;
};

Header.Logo = HeaderLogo;
