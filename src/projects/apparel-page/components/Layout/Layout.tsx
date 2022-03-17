import { PropsWithChildren } from "react";

interface LayoutProps {
  className?: string;
}

export const Layout = ({ children, className }: PropsWithChildren<LayoutProps>) => {
  const classes = [
    "max-w-screen-mobile mx-auto font-Josefin-Sans bg-gradient-to-b from-apparel-linear-1/2 to-apparel-linear-2/2",
    className,
  ]
    .join(" ")
    .trim();

  return <section className={classes}>{children}</section>;
};
