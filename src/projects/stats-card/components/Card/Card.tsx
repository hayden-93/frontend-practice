interface CardProps {
  className?: string;
}

export const Card = ({ className }: CardProps) => {
  const classes = ["flex max-w-screen-lg mx-auto bg-card-bg text-white rounded-lg overflow-hidden", className]
    .join(" ")
    .trim();

  return (
    <>
      <div className={classes}>
        <div className="p-16">
          <h2 className="text-4xl text-neutral-white font-semibold">
            Get <span className="text-accent">insights</span> that help your business grow.
          </h2>
          <p className="text-base text-left text-neutral-white-stat mt-6">
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience,
            and overall efficiency.
          </p>
          <div className="flex justify-between mt-16">
            <div className="space-y-1">
              <span className="block text-neutral-white text-xl font-bold">10k+</span>
              <span className="block text-neutral-white-stat uppercase text-xs">companies</span>
            </div>
            <div className="space-y-1">
              <span className="block text-neutral-white text-xl font-bold">314</span>
              <span className="block text-neutral-white-stat uppercase text-xs">templates</span>
            </div>
            <div className="space-y-1">
              <span className="block text-neutral-white text-xl font-bold">12M+</span>
              <span className="block text-neutral-white-stat uppercase text-xs">queries</span>
            </div>
          </div>
        </div>
        <div className="bg-accent bg-blend-multiply bg-cover bg-cover-image min-w-1/2" />
      </div>
      <div>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/hayden-93/stats-preview-card-component"> Hayden Buckley-Smith</a>.
      </div>
    </>
  );
};
