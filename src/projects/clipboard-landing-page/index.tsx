import { Footer, Header } from "./components";
import { DownloadCard } from "./components/DownloadCard/DownloadCard";

interface ClipboardLandingPageProps {
  className?: string;
}

export function ClipboardLandingPage({ className }: ClipboardLandingPageProps) {
  const classes = ["max-w-screen-2xl", className].join(" ").trim();
  return (
    <div className={classes}>
      <Header>
        <Header.Logo src="/clipboard-landing-page/logo.svg" alt="Clipboard Logo" />
      </Header>
      <main>
        <DownloadCard>
          <DownloadCard.Title></DownloadCard.Title>
          <DownloadCard.Description></DownloadCard.Description>
          <div className="space-x-3">
            <DownloadCard.Button className="bg-clipboard-cyan border-b-clipboard-cyan shadow-clipboard-cyan">
              Download for iOS
            </DownloadCard.Button>
            <DownloadCard.Button className="bg-clipboard-light-blue border-b-clipboard-light-blue shadow-clipboard-light-blue">
              Download for Mac
            </DownloadCard.Button>
          </div>
        </DownloadCard>
        <section className="mt-20">
          <div className="max-w-screen-xxs mx-auto text-center space-y-4">
            <h3 className="text-2xl text-clipboard-dark-grayish-blue font-medium">Keep track of your snippets</h3>
            <p className="text-sm text-clipboard-grayish-blue font-light">
              Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets
              immediately on all your devices. Our Mac and iOS apps will help you organize everything.
            </p>
          </div>
          <div className="flex mt-14 items-center">
            <img src="/clipboard-landing-page/image-computer.png" alt="Image of Computer" className="" />
            <div className="block ml-20 w-64 space-y-6">
              <h4 className="text-xl text-clipboard-dark-grayish-blue">Quick Search</h4>
              <p className="text-xs text-clipboard-grayish-blue font-light">
                Easily search your snippets by content, category, web address, application, and more.
              </p>
              <h4 className="text-xl text-clipboard-dark-grayish-blue">iCloud Sync</h4>
              <p className="text-xs text-clipboard-grayish-blue font-light">
                Instantly saves and syncs snippets across all your devices.
              </p>
              <h4 className="text-xl text-clipboard-dark-grayish-blue">Complete History</h4>
              <p className="text-xs text-clipboard-grayish-blue font-light">
                Retrieve any snippets from the first moment you started using the app.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-20 max-w-screen-xs mx-auto text-center space-y-4">
          <h2 className="text-xl text-clipboard-dark-grayish-blue">Access Clipboard anywhere</h2>
          <p className="text-xs text-clipboard-grayish-blue font-light">
            Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple
            clicks.
          </p>
        </section>
        <div className="max-w-screen-desktop mx-auto mt-14">
          <img src="/clipboard-landing-page/image-devices.png" alt="Computer and Mobile Devices" className="" />
        </div>
        <section className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-xl text-clipboard-dark-grayish-blue">Supercharge your workflow</h2>
          <p className="text-xs text-clipboard-grayish-blue font-light">
            We've got the tools to boost your productivity.
          </p>
          <div className="flex mt-14">
            <div>
              <svg width="44" height="40" xmlns="http://www.w3.org/2000/svg">
                <g fill="#9EABB2" fill-rule="nonzero">
                  <path d="M11.07 0C8.353 0 6.14 2.192 6.14 4.876l-.179 25.278 2.69.02.179-25.289c0-1.21 1.005-2.196 2.24-2.196h27.027V0H11.071z" />
                  <path d="M38.097 0a5.115 5.115 0 00-5.11 5.11v28.37c0 2.052-1.668 3.72-3.72 3.72a3.725 3.725 0 01-3.72-3.72V30.21c0-.743-.601-1.345-1.344-1.345H1.345C.602 28.864 0 29.466 0 30.21v3.272a6.417 6.417 0 006.41 6.409V37.2a3.724 3.724 0 01-3.72-3.72v-1.927h20.168v1.928a6.417 6.417 0 006.41 6.409 6.417 6.417 0 006.409-6.41V12.46h6.185c.743 0 1.345-.602 1.345-1.345V5.11A5.115 5.115 0 0038.097 0zm2.42 9.77h-4.84V5.11a2.423 2.423 0 012.42-2.42 2.423 2.423 0 012.42 2.42v4.66z" />
                  <path d="M6.14 37.201h22.813v2.689H6.14zM19.99 7.485h-6.947a1.345 1.345 0 100 2.69h6.947a1.345 1.345 0 100-2.69zM28.057 12.863H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69zM28.057 18.242H13.043a1.345 1.345 0 100 2.69h15.014a1.344 1.344 0 100-2.69zM28.057 23.62H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69z" />
                </g>
              </svg>
              <h3 className="text-xl text-clipboard-dark-grayish-blue">Create blacklists</h3>
              <p className="text-xs text-clipboard-grayish-blue font-light">
                Ensure sensitive information never makes its way to your clipboard by excluding certain sources.
              </p>
            </div>
            <div className="">
              <svg width="36" height="32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z"
                  fill="#9EABB2"
                  fill-rule="nonzero"
                />
              </svg>
              <h3 className="text-xl text-clipboard-dark-grayish-blue">Plain text snippets</h3>
              <p className="text-xs text-clipboard-grayish-blue font-light">
                Remove unwanted formatting from copied text for a consistent look.
              </p>
            </div>
            <div className="">
              <img src="/clipboard-landing-page/icon-preview.svg" alt="Preview Logo" />
              <h3 className="text-xl text-clipboard-dark-grayish-blue">Sneak preview</h3>
              <p className="text-xs text-clipboard-grayish-blue font-light">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </section>
        <img src="/clipboard-landing-page/logo-google.png" alt="Google Logo" />
        <img src="/clipboard-landing-page/logo-ibm.png" alt="IBM Logo" />
        <img src="/clipboard-landing-page/logo-microsoft.png" alt="Microsoft Logo" />
        <img src="/clipboard-landing-page/logo-hp.png" alt="Hewlett Packard Enterprise Logo" />
        <img src="/clipboard-landing-page/logo-vector-graphics.png" alt="Vector Graphics Logo" />
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start
          adding to your clipboard.
        </p>
        <div>
          <button>Download for iOS</button>
          <button>Download for Mac</button>
        </div>
      </main>
      <Footer>
        <img src="/clipboard-landing-page/logo.svg" alt="Clipboard Logo" />
        <div className="block">
          <nav>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
              <li>
                <a href="#">Install Guide</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <img src="/clipboard-landing-page/icon-twitter.svg" alt="Twitter" />
          <img src="/clipboard-landing-page/icon-facebook.svg" alt="Facebook" />
          <img src="/clipboard-landing-page/icon-instagram.svg" alt="Instagram" />
        </div>
      </Footer>
    </div>
  );
}
