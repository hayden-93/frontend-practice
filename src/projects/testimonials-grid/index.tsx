import { Card } from "./components/Card/Card";

interface TestimonialsGridProps {
  className?: string;
}

export function TestimonialsGrid({ className }: TestimonialsGridProps) {
  const classes = ["max-w-screen-xxs mx-auto p-6 space-y-4 md:max-w-screen-lg", className].join(" ").trim();
  return (
    <main className="bg-neutral-2">
      <div className={classes}>
        <section className="grid gap-6 md:grid-cols-4">
          <Card
            bg="violet"
            className="before:content-[''] before:absolute before:top-0 before:right-6 before:bg-quotation before:w-28 before:h-28 before:bg-cover before:bg-no-repeat before:-z-10 relative z-10 rounded-xl overflow-hidden p-8 space-y-4 md:before:right-20 md:col-span-2 md:order-1"
          >
            <Card.Header>
              <div className="flex">
                <img
                  src="/testimonials-grid/image-daniel.jpg"
                  alt="Daniel Clifford"
                  className="self-center min-w-8 w-8 h-8 border border-b-neutral-main-dark-blue rounded-full"
                />
                <div className="pl-4">
                  <p className="text-neutral-light-grayish-blue text-xs">Daniel Clifford</p>
                  <p className="text-neutral-light-grayish-blue text-xs opacity-50">Verified Graduate</p>
                </div>
              </div>
            </Card.Header>
            <Card.Content>
              <Card.Title color="light">
                I received a job offer mid-course, and the subjects I learned were current, if not more so, in the
                company I joined. I honestly feel I got every penny's worth.
              </Card.Title>
              <Card.Description>
                “I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and
                have heard some people who had an amazing experience here. I signed up for the free intro course and
                found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most
                grueling - time of my life. Since completing the course, I've successfully switched careers, working as
                a Software Engineer at a VR startup.”
              </Card.Description>
            </Card.Content>
          </Card>
          <Card bg="darkGray" className="md:order-1">
            <Card.Header>
              <div className="flex">
                <img
                  src="/testimonials-grid/image-jonathan.jpg"
                  alt="Jonathan Walters"
                  className="self-center min-w-8 w-8 h-8 border border-b-neutral-main-dark-blue rounded-full"
                />
                <div className="pl-4">
                  <p className="text-neutral-light-grayish-blue text-xs">Jonathan Walters</p>
                  <p className="text-neutral-light-grayish-blue text-xs opacity-50">Verified Graduate</p>
                </div>
              </div>
            </Card.Header>
            <Card.Content>
              <Card.Title color="light">The team was very supportive and kept me motivated</Card.Title>
              <Card.Description>
                “I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big
                company. This was one of the best investments I've made in myself.”
              </Card.Description>
            </Card.Content>
          </Card>
          <Card className="md:order-2">
            <Card.Header>
              <div className="flex">
                <img
                  src="/testimonials-grid/image-jeanette.jpg"
                  alt="Jeanette Harmon"
                  className="self-center min-w-8 w-8 h-8 rounded-full"
                />
                <div className="pl-4">
                  <h2 className="text-neutral-main-dark-blue text-xs font-semibold opacity-70">Jeanette Harmon</h2>
                  <p className="text-neutral-main-dark-blue text-xs opacity-50">Verified Graduate</p>
                </div>
              </div>
            </Card.Header>
            <Card.Content>
              <Card.Title color="dark">An overall wonderful and rewarding experience</Card.Title>
              <Card.Description color="dark">
                “Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while
                doing something I love.”
              </Card.Description>
            </Card.Content>
          </Card>
          <Card bg="darkBlue" className="md:col-span-2 md:order-2">
            <Card.Header>
              <div className="flex">
                <img
                  src="/testimonials-grid/image-patrick.jpg"
                  alt="Patrick Abrams"
                  className="self-center min-w-8 w-8 h-8 border-2 border-violet rounded-full"
                />
                <div className="pl-4">
                  <h2 className="text-neutral-light-grayish-blue text-xs">Patrick Abrams</h2>
                  <p className="text-neutral-light-grayish-blue text-xs opacity-50">Verified Graduate</p>
                </div>
              </div>
            </Card.Header>
            <Card.Content>
              <Card.Title color="light">
                Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
                learning from their experiences was easy.
              </Card.Title>
              <Card.Description>
                “The staff seem genuinely concerned about my progress which I find really refreshing. The program gave
                me the confidence necessary to be able to go out in the world and present myself as a capable junior
                developer. The standard is above the rest. You will get the personal attention you need from an
                incredible community of smart and amazing people.”
              </Card.Description>
            </Card.Content>
          </Card>
          <Card className="md:order-1 md:row-span-2">
            <Card.Header>
              <div className="flex">
                <img
                  src="/testimonials-grid/image-kira.jpg"
                  alt="Kira Whittle"
                  className="self-center min-w-8 w-8 h-8 rounded-full"
                />
                <div className="pl-4">
                  <p className="text-neutral-line-dark-blue text-xs">Kira Whittle</p>
                  <p className="text-neutral-line-dark-blue text-xs opacity-50">Verified Graduate</p>
                </div>
              </div>
            </Card.Header>
            <Card.Content>
              <Card.Title color="dark">Such a life-changing experience. Highly recommended!</Card.Title>
              <Card.Description color="dark">
                “Before joining the bootcamp, I've never written a line of code. I needed some structure from
                professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                could ever have. In fact, I've often referred to it during interviews as an example of my developent
                experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
                100% recommend!”
              </Card.Description>
            </Card.Content>
          </Card>
        </section>
      </div>
    </main>
  );
}
