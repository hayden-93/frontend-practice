interface SeperatorProps {
  className?: string;
}

export const Seperator = ({ className }: SeperatorProps) => {
  const classes = ["h-px my-4", className].join(" ").trim();
  return <hr className={classes}></hr>;
};
