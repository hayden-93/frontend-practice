import { Avatar, Card, Footer, Grid, Header, Hero, Testimonials } from "./components";

export function SunnysideAgency() {
  return (
    <div>
      <Hero>
        <Header />
        <Hero.Title>We Are Creatives</Hero.Title>
        <Hero.Arrow />
      </Hero>
      <section className="grid grid-cols-2 text-left">
        <div className="max-w-screen-sm mx-auto self-center space-y-6">
          <h3 className="text-4xl font-black w-80 font-fraunces">Transform your brand</h3>
          <p className="text-sunny-dark-grayish-blue text-sm font-extrabold w-96">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>
          <button className="py-4 uppercase font-black font-fraunces underline decoration-yellow decoration-4">
            Learn More
          </button>
        </div>
        <div className="">
          <img src="/sunnyside-agency/image-transform.jpg" alt="Egg Image" />
        </div>
        <div className="">
          <img src="/sunnyside-agency/image-stand-out.jpg" alt="Pink Cup Image" />
        </div>
        <div className="max-w-screen-sm mx-auto self-center space-y-6">
          <h3 className="text-4xl font-black font-fraunces w-80">Stand out to the right audience</h3>
          <p className="text-sunny-dark-grayish-blue text-base font-extrabold w-96">
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
            we'll build and extend your brand in digital places.
          </p>
          <button className="py-4 uppercase font-black font-fraunces underline decoration-soft-red decoration-4">
            Learn More
          </button>
        </div>
        <div className="relative">
          <div className="absolute">
            <img src="/sunnyside-agency/image-graphic-design.jpg" alt="Cherry Image" className="object-cover" />
          </div>
          <div className="relative max-w-screen-md mx-auto text-center py-24 top-72 w-1/2">
            <h3 className="text-center font-fraunces text-2xl text-desat-cyan">Graphic Design</h3>
            <p className="max-w-screen-xxs mx-auto mt-6 font-barlow text-desat-cyan">
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures
              potential clients' attention.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute">
            <img src="/sunnyside-agency/image-photography.jpg" alt="Orange Image" className="object-cover" />
          </div>
          <div className="relative max-w-screen-md mx-auto text-center py-24 top-72 w-1/2">
            <h3 className="text-center font-fraunces text-2xl text-desat-cyan">Photography</h3>
            <p className="max-w-screen-xxs mx-auto mt-6 font-barlow text-desat-cyan">
              Increase your creditbility by getting themost stunning, high-quality photos that improve your business
              image.
            </p>
          </div>
        </div>
      </section>
      <Testimonials className="mt-96 py-20">
        <h1 className="text-center text-2xl font-fraunces text-sunny-grayish-blue font-black tracking-widest uppercase">
          Client Testimonials
        </h1>
        <div className="flex mt-20">
          <Card className="items-center">
            <Avatar src="/sunnyside-agency/image-emily.jpg" alt="Emily" className="" />
            <Card.Description>
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
              hit.
            </Card.Description>
            <div>
              <Card.Author>Emily R.</Card.Author>
              <Card.JobTitle>Marketing Director</Card.JobTitle>
            </div>
          </Card>
          <Card className="">
            <Avatar src="/sunnyside-agency/image-thomas.jpg" alt="Thomas" className="" />
            <Card.Description>
              Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and
              enjoyable experience.
            </Card.Description>
            <div>
              <Card.Author>Thomas S.</Card.Author>
              <Card.JobTitle>Chief Operating Officer</Card.JobTitle>
            </div>
          </Card>
          <Card className="">
            <Avatar src="/sunnyside-agency/image-jennie.jpg" alt="Jennie" className="" />
            <Card.Description>
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </Card.Description>
            <div>
              <Card.Author>Jennie F.</Card.Author>
              <Card.JobTitle>Business Owner</Card.JobTitle>
            </div>
          </Card>
        </div>
      </Testimonials>
      <Grid>
        <Grid.Image src="/sunnyside-agency/image-gallery-milkbottles.jpg" alt="Milk Bottles" />
        <Grid.Image src="/sunnyside-agency/image-gallery-orange.jpg" alt="Orange" />
        <Grid.Image src="/sunnyside-agency/image-gallery-cone.jpg" alt="Ice Cream Cone" />
        <Grid.Image src="/sunnyside-agency/image-gallery-sugarcubes.jpg" alt="Sugar Cubes Stacked" />
      </Grid>
      <Footer>
        <Footer.NavLinks></Footer.NavLinks>
        <Footer.Social></Footer.Social>
      </Footer>
    </div>
  );
}
