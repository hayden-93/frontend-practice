interface AvatarProps {
  alt: string;
  className?: string;
  src: string;
}

export const Avatar = ({ alt, className, src }: AvatarProps) => {
  const classes = ["", className].join(" ").trim();

  return <img src={src} alt={alt} />;
};
