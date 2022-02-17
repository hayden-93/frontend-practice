import { PropsWithChildren } from "react";

interface GridProps {
  className?: string;
}

export const Grid = ({ children, className, ...props }: PropsWithChildren<GridProps>) => {
  const classes = ["grid grid-cols-4 mt-44", className].join(" ").trim();

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

interface GridImageProps {
  className?: string;
  src: string;
  alt: string;
}

const GridImage = ({ className, ...props }: GridImageProps) => {
  const classes = ["", className].join(" ").trim();

  return <img className={classes} {...props} />;
};

Grid.Image = GridImage;
