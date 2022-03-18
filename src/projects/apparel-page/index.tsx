import { Layout, Logo, PageContent, PageTitle } from "./components";

export function ApparelPage() {
  return (
    // <Layout>
    //   <Logo />
    //   <section>
    //     <img src="/apparel-page/hero-mobile.jpg" alt="Hero Page Image" className="md:bg-apparel-image" />
    //   </section>
    //   <section className="max-w-screen-mobile mx-auto mt-8 py-8 text-5xl tracking-widest text-center uppercase">
    //     <PageTitle className="text-apparel-desat-red font-thin">We're</PageTitle>
    //     <span className="text-black">Coming</span>
    //     <span className="block text-black">Soon</span>
    //   </section>
    //   <section className="px-6 text-center text-sm text-apparel-desat-red font-semibold leading-relaxed">
    //     <PageContent>
    //       Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date
    //       with announcements and our launch deals.
    //     </PageContent>
    //   </section>
    //   <section className="py-4 px-6 pb-24 text-center">
    //     <div className="flex justify-center">
    //       <input
    //         type="email"
    //         placeholder="Email Address"
    //         className="bg-apparel-linear-2/2 border-apparel-desat-red rounded-3xl border w-full py-2 px-4 placeholder:text-apparel-desat-red placeholder:opacity-60"
    //       />
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="60"
    //         height="42"
    //         className="absolute px-4 py-3 ml-36 bg-gradient-to-r from-apparel-linear-a to-apparel-linear-b rounded-3xl"
    //       >
    //         <path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671" />
    //       </svg>
    //     </div>
    //   </section>
    // </Layout>
    <section className="max-w-screen-desktop mx-auto">
      <div className="grid grid-cols-2">
        <div className="font-Josefin-Sans max-w-screen-xs space-y-4">
          <img src="/apparel-page/logo.svg" alt="Base Apparel Logo" className="py-20 px-32" />
          <h2 className="pl-32 text-apparel-desat-red text-6xl text-left tracking-normal uppercase">W e ' r e</h2>
          <span className="block pl-32 text-black text-6xl text-left tracking-normal uppercase">C o m i n g</span>
          <span className="block pl-32 text-black text-6xl text-left tracking-normal uppercase">S o o n</span>
          <div>
            <p className="block pl-32 text-apparel-desat-red">
              Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay
              up-to-date with announcements and our launch deals.
            </p>
          </div>
        </div>
        <div className="">
          <img src="/apparel-page/hero-desktop.jpg" alt="Image of Worker" className="w-auto h-screen px-20" />
        </div>
      </div>
    </section>
  );
}
