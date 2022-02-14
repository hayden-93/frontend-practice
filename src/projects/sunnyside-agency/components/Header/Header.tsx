interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const classes = ["max-w-screen-desktop mx-auto h-screen", className].join(" ").trim();
  return (
    <header className="">
      <div className="relative">
        <img src="/sunnyside-agency/image-header.jpg" alt="Rainbow Image" className="h-screen w-full absolute" />
        <img src="/sunnyside-agency/logo.svg" alt="Sunnyside Agency Logo" className="absolute py-12 px-6" />
        <div className="flex justify-end">
          <nav className="absolute">
            <ul className="flex justify-end">
              <li className="text-white">
                <a href="#">About</a>
              </li>
              <li className="text-white">
                <a href="#">Services</a>
              </li>
              <li className="text-white">
                <a href="#">Projects</a>
              </li>
              <button className="rounded-full bg-white py-3 px-4 font-medium">CONTACT</button>
            </ul>
          </nav>
        </div>
        <div className="justify-center">
          <h1 className="absolute text-white uppercase">We Are Creatives</h1>
        </div>
        <div className="text-center">
          <img src="/sunnyside-agency/icon-arrow-down.svg" alt="Down Arrow Icon" className="absolute" />
        </div>
      </div>
    </header>
  );
};
