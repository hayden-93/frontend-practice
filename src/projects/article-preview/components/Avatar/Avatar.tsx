interface AvatarProps {
  alt: string;
  className?: string;
  src: string;
}

export const Avatar = ({ alt, className, src }: AvatarProps) => {
  const classes = ["rounded-full w-12 h-auto", className].join(" ").trim();

  return <img src={src} alt={alt} className={classes} />;
};
