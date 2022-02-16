import { Card, Header, Hero, Testimonials } from "./components";

export function SunnysideAgency() {
  return (
    <>
      <Header />
      <Hero />
      {/* <section className="grid grid-cols-2 text-left">
        <div className="max-w-screen-sm mx-auto self-center space-y-4">
          <h3 className="text-4xl font-black w-80">Transform your brand</h3>
          <p className="text-sunny-dark-grayish-blue text-base font-extrabold w-96">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <button className="py-4 uppercase font-black underline decoration-yellow decoration-4">Learn More</button>
        </div>
        <div className="">
          <img src="/sunnyside-agency/image-transform.jpg" alt="Egg Image" />
        </div>
        <div className="">
          <img src="/sunnyside-agency/image-stand-out.jpg" alt="Pink Cup Image" />
        </div>
        <div className="max-w-screen-sm mx-auto self-center space-y-6">
          <h3 className="text-4xl font-black w-80">Stand out to the right audience</h3>
          <p className="text-sunny-dark-grayish-blue text-base font-extrabold w-96">
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
            we'll build and extend your brand in digital places.
          </p>
          <button className="py-4 uppercase font-black underline decoration-yellow decoration-4">Learn More</button>
        </div>
        <div className="relative text-center space-y-3">
          <img src="/sunnyside-agency/image-graphic-design.jpg" alt="Cherry Image" className="absolute" />
          <h3 className="relative">Graphic Design</h3>
          <p className="relative max-w-screen-xxs mx-auto">
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential clients' attention.
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
      </section> */}

      <Testimonials>
        <h1>Client Testimonials</h1>
        <div className="flex">
          <Card>
            <Card.Avatar src="/sunnyside-agency/image-emily.jpg" alt="Emily" className="" />
            <Card.Description>
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
              hit.
            </Card.Description>
            <Card.Author>Emily R.</Card.Author>
            <Card.JobTitle>Marketing Director</Card.JobTitle>
          </Card>
          <Card>
            <Card.Avatar src="/sunnyside-agency/image-emily.jpg" alt="Emily" className="" />
            <Card.Description>
              Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and
              enjoyable experience.
            </Card.Description>
            <Card.Author>Thomas S.</Card.Author>
            <Card.JobTitle>Chief Operating Officer</Card.JobTitle>
          </Card>
          <Card>
            <Card.Avatar src="/sunnyside-agency/image-emily.jpg" alt="Emily" className="" />
            <Card.Description>
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </Card.Description>
            <Card.Author>Jennie F.</Card.Author>
            <Card.JobTitle>Business Owner</Card.JobTitle>
          </Card>
        </div>
      </Testimonials>
    </>
  );
}
