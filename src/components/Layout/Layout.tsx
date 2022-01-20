import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  const classes = ["bg-neutral-main-dark-blue h-screen", className].join(" ").trim();
  return (
    <div className={classes}>
      <div className="max-w-screen-mobile mx-auto font-sans py-16">{children}</div>
    </div>
  );
};
