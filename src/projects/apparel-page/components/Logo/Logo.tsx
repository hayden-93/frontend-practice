interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const classes = ["py-8 px-4 ml-2 w-36 h-auto", className].join(" ").trim();

  return <img src="/apparel-page/logo.svg" alt="Base Apparel Logo" className={classes} />;
};
