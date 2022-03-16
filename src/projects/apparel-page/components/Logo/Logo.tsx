interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  const classes = ["", className].join(" ").trim();

  return <img src="" alt="" className={classes} />;
};
