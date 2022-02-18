import { PropsWithChildren } from "react";

interface TestimonialsProps {
  className?: string;
}

export const Testimonials = ({ children, className, ...props }: PropsWithChildren<TestimonialsProps>) => {
  const classes = ["max-w-screen-lg mx-auto", className].join(" ").trim();

  return (
    <section className={classes} {...props}>
      <div>{children}</div>
    </section>
  );
};
