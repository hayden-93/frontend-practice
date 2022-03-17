interface PageTitleProps {
  className?: string;
}

export const PageTitle = ({ className }: PageTitleProps) => {
  const classes = ["", className].join(" ").trim();

  return <h2>We're Coming Soon</h2>;
};
