interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
}

export const Avatar = ({ alt, className, src }: AvatarProps) => {
  const classes = ["rounded-full w-20 h-auto mx-auto", className].join(" ").trim();

  return (
    <div className="">
      <img className={classes} src={src} alt={alt} />
    </div>
  );
};
