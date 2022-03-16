interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const classes = ["", className].join(" ").trim();

  return <img src="/apparel-page/logo.svg" alt="Base Apparel Logo" className={classes} />;
};
