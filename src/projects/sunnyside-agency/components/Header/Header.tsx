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
            <a href="#" className="block text-white">
              About
            </a>
            <a href="#" className="block text-white">
              Services
            </a>
            <a href="#" className="block text-white">
              Projects
            </a>
            <a href="#" className="rounded-full bg-white py-3 px-6 font-medium uppercase hover:opacity-40">
              Contact
            </a>
          </nav>
        </div>
        {/* <div className="max-w-screen-sm mx-auto">
          <h1 className="absolute text-white text-6xl font-extrabold tracking-widest uppercase top-60 ml-12">
            We Are Creatives
          </h1>
        </div> */}
        {/* <div className="relative max-w-screen-xxs mx-auto left-56 place-items-center">
          <img src="/sunnyside-agency/icon-arrow-down.svg" alt="Down Arrow Icon" className="absolute top-96" />
        </div> */}
      </header>
    </>
  );
};
