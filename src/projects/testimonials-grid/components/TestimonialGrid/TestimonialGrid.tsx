interface TestimonialsGridProps {
  className?: string;
}

export const TestimonialsGrid = ({ className }: TestimonialsGridProps) => {
  const classes = ["", className].join(" ").trim();
  return (
    <div className={classes}>
      <div className="">1</div>
      <div className="">2</div>
      <div className="">3</div>
      <div className="">4</div>
      <div className="">5</div>
    </div>
  );
};
