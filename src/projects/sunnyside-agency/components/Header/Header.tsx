interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const classes = ["bg-sunnyside-blue py-10 px-8", className].join(" ").trim();

  return (
    <>
      <header className={classes}>
        <div className="flex items-center justify-between max-w-screen-desktop mx-auto px-2 space-x-4">
          <img src="/sunnyside-agency/logo.svg" alt="Sunnyside Agency Logo" className="block relative w-auto h-8" />
          <nav className="flex items-center space-x-12">
            <a href="#" className="block text-white font-barlow">
              About
            </a>
            <a href="#" className="block text-white font-barlow">
              Services
            </a>
            <a href="#" className="block text-white font-barlow">
              Projects
            </a>
            <a
              href="#"
              className="rounded-full bg-white py-4 px-6 font-medium font-fraunces uppercase hover:text-white hover:opacity-40"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
