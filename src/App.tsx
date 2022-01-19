import "./index.css";
import { Zap, Clock } from "react-feather";

import { Card } from "./components/Card/Card";

function App() {
  return (
    <div className="bg-neutral-main-dark-blue">
      <div className="max-w-screen-mobile mx-auto font-sans py-16">
        <Card className="bg-neutral-card-dark-blue mx-auto px-8 rounded-2xl">
          <div className="py-8 overflow-hidden">
            <img src="/equilibrium.jpg" alt="NFT Logo" className="rounded-2xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-white text-lg font-bold">Equilibrium #3429</h3>
            <p className="text-white text-sm font-light opacity-50">
              Our Equilibrium collection promotes balance and calm
            </p>
            <div className="flex justify-between">
              <div className="flex text-primary-cyan space-x-1">
                <Zap className="fill-primary-cyan" />
                <span>0.041 ETH</span>
              </div>
              <div className="flex text-white opacity-50 space-x-1">
                <Clock className="" />
                <span>3 days left</span>
              </div>
              <hr className="bg-neutral-line-dark-blue" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
