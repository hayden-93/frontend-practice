interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const Avatar = ({ src, alt, className }: AvatarProps) => {
  const classes = ["", className].join(" ").trim();

  return <img src={src} alt={alt} className={classes} />;
};
