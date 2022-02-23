import { Button, Footer, Heading } from "./components";

interface ClipboardLandingPageProps {
  className?: string;
}

export function ClipboardLandingPage({ className }: ClipboardLandingPageProps) {
  const classes = ["font-Bai-Jamjuree", className].join(" ").trim();

  return (
    <div className={classes}>
      <section className="bg-header-image bg-no-repeat py-6">
        <div className="max-w-screen-sm mx-auto text-center space-y-4">
          <img src="/clipboard-landing-page/logo.svg" alt="Clipboard Logo" className="mx-auto pt-24 pb-10" />
          <Heading className="text-5xl leading-tight">A history of everything you copy</Heading>
          <Heading.Description className="text-xl">
            Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your
            devices.
          </Heading.Description>
          <div className="py-8 space-x-3">
            <Button className="bg-clipboard-cyan border-b-clipboard-cyan shadow-clipboard-cyan">
              Download for iOS
            </Button>
            <Button className="bg-clipboard-light-blue border-b-clipboard-light-blue shadow-clipboard-light-blue">
              Download for Mac
            </Button>
          </div>
        </div>
      </section>
      <section className="mt-28">
        <div className="max-w-screen-sm mx-auto text-center space-y-4">
          <Heading className="text-4xl">Keep track of your snippets</Heading>
          <Heading.Description className="text-lg">
            Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately
            on all your devices. Our Mac and iOS apps will help you organize everything.
          </Heading.Description>
        </div>
      </section>
      <section>
        <div className="relative mt-24">
          <div className="mx-auto grid grid-cols-2 grid-flow-col-dense gap-40">
            <div className="py-16 px-6 col-start-2">
              <div className="block w-96 space-y-16 text-left">
                <div className="space-y-2">
                  <Heading className="text-2xl font-semibold text-clipboard-dark-grayish-blue">Quick Search</Heading>
                  <Heading.Description className="">
                    Easily search your snippets by content, category, web address, application, and more.
                  </Heading.Description>
                </div>
                <div className="space-y-2">
                  <Heading className="text-2xl font-semibold text-clipboard-dark-grayish-blue">iCloud Sync</Heading>
                  <Heading.Description className="">
                    Instantly saves and syncs snippets across all your devices.
                  </Heading.Description>
                </div>
                <div className="space-y-2">
                  <Heading className="text-2xl font-semibold text-clipboard-dark-grayish-blue">
                    Complete History
                  </Heading>
                  <Heading.Description className="">
                    Retrieve any snippets from the first moment you started using the app.
                  </Heading.Description>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src="/clipboard-landing-page/image-computer.png"
                  alt="Image of Computer"
                  className="absolute -right-20 max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-52 max-w-screen-sm mx-auto text-center space-y-6">
        <Heading className="text-4xl">Access Clipboard anywhere</Heading>
        <Heading.Description className="text-lg">
          Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple
          clicks.
        </Heading.Description>
      </section>
      <section className="max-w-screen-desktop mx-auto mt-28">
        <img src="/clipboard-landing-page/image-devices.png" alt="Computer and Mobile Devices" className="mx-auto" />
      </section>
      <section className="max-w-screen-md mx-auto mt-28 text-center space-y-4">
        <Heading className="text-4xl">Supercharge your workflow</Heading>
        <Heading.Description>We've got the tools to boost your productivity.</Heading.Description>
        <div className="flex mt-20 justify-between">
          <div className="block mt-14 space-y-4">
            <svg width="44" height="40" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <g fill="#9EABB2" fill-rule="nonzero">
                <path d="M11.07 0C8.353 0 6.14 2.192 6.14 4.876l-.179 25.278 2.69.02.179-25.289c0-1.21 1.005-2.196 2.24-2.196h27.027V0H11.071z" />
                <path d="M38.097 0a5.115 5.115 0 00-5.11 5.11v28.37c0 2.052-1.668 3.72-3.72 3.72a3.725 3.725 0 01-3.72-3.72V30.21c0-.743-.601-1.345-1.344-1.345H1.345C.602 28.864 0 29.466 0 30.21v3.272a6.417 6.417 0 006.41 6.409V37.2a3.724 3.724 0 01-3.72-3.72v-1.927h20.168v1.928a6.417 6.417 0 006.41 6.409 6.417 6.417 0 006.409-6.41V12.46h6.185c.743 0 1.345-.602 1.345-1.345V5.11A5.115 5.115 0 0038.097 0zm2.42 9.77h-4.84V5.11a2.423 2.423 0 012.42-2.42 2.423 2.423 0 012.42 2.42v4.66z" />
                <path d="M6.14 37.201h22.813v2.689H6.14zM19.99 7.485h-6.947a1.345 1.345 0 100 2.69h6.947a1.345 1.345 0 100-2.69zM28.057 12.863H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69zM28.057 18.242H13.043a1.345 1.345 0 100 2.69h15.014a1.344 1.344 0 100-2.69zM28.057 23.62H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69z" />
              </g>
            </svg>
            <Heading className="text-2xl font-semibold text-clipboard-dark-grayish-blue">Create blacklists</Heading>
            <Heading.Description className="text-sm">
              Ensure sensitive information never makes its
              <br />
              way to your clipboard by excluding certain
              <br />
              sources.
            </Heading.Description>
          </div>
          <div className="block mt-14 space-y-4">
            <svg width="36" height="32" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path
                d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z"
                fill="#9EABB2"
                fill-rule="nonzero"
              />
            </svg>
            <Heading className="text-2xl font-semibold text-clipboard-dark-grayish-blue">Plain text snippets</Heading>
            <Heading.Description className="text-sm">
              Remove unwanted formatting from copied text <br />
              for a consistent look.
            </Heading.Description>
          </div>
          <div className="block mt-14 space-y-4">
            <img src="/clipboard-landing-page/icon-preview.svg" alt="Preview Logo" className="mx-auto" />
            <Heading className="text-2xl font-semibold text-clipboard-dark-grayish-blue">Sneak preview</Heading>
            <Heading.Description className="text-sm text-clipboard-grayish-blue font-light">
              Quick preview of all snippets on your Clipboard <br />
              for easy access.
            </Heading.Description>
          </div>
        </div>
      </section>
      <section className="flex max-w-screen-md mx-auto mt-40 justify-between">
        <img src="/clipboard-landing-page/logo-google.png" alt="Google Logo" className="w-auto h-10" />
        <img src="/clipboard-landing-page/logo-ibm.png" alt="IBM Logo" className="w-auto h-10" />
        <img src="/clipboard-landing-page/logo-microsoft.png" alt="Microsoft Logo" className="w-auto h-10" />
        <img src="/clipboard-landing-page/logo-hp.png" alt="HP Logo" className="w-auto h-10" />
        <img
          src="/clipboard-landing-page/logo-vector-graphics.png"
          alt="Vector Graphics Logo"
          className="w-auto h-10"
        />
      </section>
      <section className="max-w-screen-xs mx-auto text-center space-y-8 mt-32">
        <Heading className="text-4xl">Clipboard for iOS and Mac OS</Heading>
        <Heading.Description>
          Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start
          adding to your clipboard.
        </Heading.Description>
        <div className="space-x-3">
          <Button className="bg-clipboard-cyan border-b-clipboard-cyan shadow-clipboard-cyan">Download for iOS</Button>
          <Button className="bg-clipboard-light-blue border-b-clipboard-light-blue shadow-clipboard-light-blue">
            Download for Mac
          </Button>
        </div>
      </section>
      <Footer>
        <div className="flex max-w-screen-md mx-auto justify-between space-x-36 h-1/5">
          <div>
            <img src="/clipboard-landing-page/logo.svg" alt="Clipboard Logo" className="w-auto h-14" />
          </div>
          <div className="grow">
            <ul className="grid grid-cols-3 gap-4 text-clipboard-dark-grayish-blue font-medium text-lg opacity-70">
              <li className="">
                <a href="#" className="hover:opacity-70">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Install Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          <div className="flex self-center space-x-6">
            <a href="#" className="hover:opacity-70">
              <img src="/clipboard-landing-page/icon-facebook.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70">
              <img src="/clipboard-landing-page/icon-twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-70">
              <img src="/clipboard-landing-page/icon-instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Footer>
    </div>
  );
}
