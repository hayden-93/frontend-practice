import { Link } from "react-router-dom";

const projects = [
  {
    id: "nft-preview-card",
    title: "NFT Preview Card",
    description: "",
    href: "/nft-preview-card",
  },
  {
    id: "stats-card",
    title: "Stats Card",
    description: "",
    href: "/stats-card",
  },
  {
    id: "testimonials-grid",
    title: "Testimonials Grid",
    description: "",
    href: "/testimonials-grid",
  },
  {
    id: "clipboard-landing-page",
    title: "Clipboard Landing Page",
    description: "",
    href: "/clipboard-landing-page",
  },
];

export function ProjectsHome() {
  return (
    <>
      <h1>Projects</h1>
      <p>Check out my projects</p>
      <section>
        {projects.map(({ id, title, description, href }) => (
          <Link key={id} to={`/projects${href}`}>
            <article>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          </Link>
        ))}
      </section>
    </>
  );
}
