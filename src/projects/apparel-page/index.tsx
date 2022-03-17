import { Layout, Logo } from "./components";

export function ApparelPage() {
  return (
    <Layout>
      <Logo />
      <section>
        <img src="/apparel-page/hero-mobile.jpg" alt="Hero Page Image" className="" />
      </section>
      <section className="max-w-screen-mobile mx-auto mt-8 py-8 text-5xl tracking-widest text-center uppercase">
        <h2 className="text-apparel-desat-red font-thin">We're</h2>
        <span className="text-black">Coming</span>
        <span className="block text-black">Soon</span>
      </section>
      <section className="px-6 text-center text-sm text-apparel-desat-red font-semibold leading-relaxed">
        <p>
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date
          with announcements and our launch deals.
        </p>
      </section>
      <section className="py-4 px-6 pb-24 text-center">
        <div className="flex">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-apparel-linear-2/2 border-apparel-desat-red rounded-3xl border w-full py-2 px-4 placeholder:text-apparel-desat-red placeholder:opacity-60"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="42"
            className="absolute px-4 py-3 ml-64 bg-gradient-to-r from-apparel-linear-a to-apparel-linear-b rounded-3xl"
          >
            <path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671" />
          </svg>
        </div>
      </section>
    </Layout>
  );
}
