interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const classes = ["max-w-screen-desktop mx-auto", className].join(" ").trim();
  return (
    <>
      <header className={classes}>
        <img src="/sunnyside-agency/logo.svg" alt="Sunnyside Agency Logo" className="absolute py-8 px-6 w-52 h-auto" />
        <div className="flex justify-end">
          <nav className="absolute">
            <ul className="flex justify-end space-x-12 items-center mt-5 py-3 px-10 text-lg">
              <li className="text-white">
                <a href="#">About</a>
              </li>
              <li className="text-white">
                <a href="#">Services</a>
              </li>
              <li className="text-white">
                <a href="#">Projects</a>
              </li>
              <button className="rounded-full bg-white py-3 px-6 font-medium">CONTACT</button>
            </ul>
          </nav>
        </div>
        <div className="max-w-screen-sm mx-auto">
          <h1 className="absolute text-white text-6xl font-extrabold tracking-widest uppercase top-36 ml-12">
            We Are Creatives
          </h1>
        </div>
        <div className="relative max-w-screen-sm mx-auto left-80 place-items-center">
          <img src="/sunnyside-agency/icon-arrow-down.svg" alt="Down Arrow Icon" className="absolute top-72" />
        </div>
      </header>
    </>
  );
};
