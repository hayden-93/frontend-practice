interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  const classes = ["bg-sunnyside bg-cover bg-center bg-no-repeat h-screen", className].join(" ").trim();

  return (
    <section className={classes}>
      <div className=""></div>
    </section>
  );
};
