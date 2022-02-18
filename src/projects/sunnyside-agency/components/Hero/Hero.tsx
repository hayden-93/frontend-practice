import { PropsWithChildren } from "react";

interface HeroProps {
  className?: string;
}

export const Hero = ({ children, className }: PropsWithChildren<HeroProps>) => {
  const classes = ["bg-sunnyside bg-cover bg-center bg-no-repeat h-screen", className].join(" ").trim();

  return <section className={classes}>{children}</section>;
};

interface HeroTitleProps {
  className?: string;
}

const HeroTitle = ({ children, className }: PropsWithChildren<HeroTitleProps>) => {
  const classes = [
    "max-w-screen-md mx-auto pt-48 text-center font-fraunces text-white text-6xl tracking-widest uppercase",
    className,
  ]
    .join(" ")
    .trim();

  return <h1 className={classes}>{children}</h1>;
};
interface HeroArrowProps {
  className?: string;
}

const HeroArrow = ({ className }: HeroArrowProps) => {
  const classes = ["max-w-screen-xxs mx-auto mt-24 text-center text-white", className].join(" ").trim();

  return (
    <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 3v100M3 95.484l15 15 15-15" />
      </g>
    </svg>
  );
};

Hero.Title = HeroTitle;
Hero.Arrow = HeroArrow;
