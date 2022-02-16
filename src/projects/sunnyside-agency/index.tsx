import { Hero } from "./components";

export function SunnysideAgency() {
  return (
    <>
      <Hero />
      <section className="grid grid-cols-2 text-left">
        <div className="max-w-screen-xxs mx-auto self-center space-y-4">
          <h3 className="text-4xl font-extrabold w-80">Transform your brand</h3>
          <p className="text-sunny-very-dark-grayish-blue w-96">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <button className="py-4 uppercase">Learn More</button>
        </div>
        <div className="">
          <img src="/sunnyside-agency/image-transform.jpg" alt="Egg Image" />
        </div>
        <div className="">
          <img src="/sunnyside-agency/image-stand-out.jpg" alt="Pink Cup Image" />
        </div>
        <div className="">
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
            we'll build and extend your brand in digital places.
          </p>
          <a href="#" className="uppercase">
            Learn More
          </a>
        </div>
        <div className="relative text-center">
          <img src="/sunnyside-agency/image-graphic-design.jpg" alt="Cherry Image" className="absolute" />
          <h3 className="relative">Graphic Design</h3>
          <p className="relative">
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential clients’ attention.
          </p>
        </div>
        <div className="relative text-center">
          <img src="/sunnyside-agency/image-photography.jpg" alt="Orange Image" className="absolute" />
          <h3 className="relative">Photography</h3>
          <p className="relative">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business
            image.
          </p>
        </div>
      </section>
    </>
  );
}
