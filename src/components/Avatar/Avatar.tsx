interface AvatarProps {
  alt: string;
  src: string;
  className?: string;
}

export const Avatar = ({ src, alt, className }: AvatarProps) => {
  const classes = ["border border-white rounded-full w-8 h-8", className].join(" ").trim();

  return <img src={src} alt={alt} className={classes} />;
};
