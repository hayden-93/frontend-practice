import "./index.css";
import { Zap, Clock } from "react-feather";

import { Card } from "./components/Card/Card";
import { Avatar } from "./components/Avatar/Avatar";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div className="bg-neutral-main-dark-blue">
      <Layout className="max-w-screen-mobile mx-auto font-sans py-16">
        <Card className="bg-neutral-card-dark-blue mx-auto p-8 rounded-2xl">
          <div className="overflow-hidden">
            <img
              src="/equilibrium.jpg"
              alt="Equilibrium Logo"
              className="rounded-2xl hover:text-primary-cyan cursor-pointer"
            />
          </div>
          <div className="mt-6 space-y-3">
            <h3 className="text-white text-2xl font-bold hover:text-primary-cyan cursor-pointer">Equilibrium #3429</h3>
            <p className="text-primary-soft-blue text-lg font-light">
              Our Equilibrium collection promotes balance and calm
            </p>
            <div className="flex justify-between py-2">
              <div className="flex text-primary-cyan items-center space-x-1">
                <Zap className="fill-primary-cyan w-4 h-4" />
                <span className="text-sm">0.041 ETH</span>
              </div>
              <div className="flex text-primary-soft-blue items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">3 days left</span>
              </div>
            </div>
          </div>
          <hr className="h-px my-4 text-neutral-line-dark-blue" />
          <div className="flex items-center space-x-4">
            <Avatar src="/avatar.png" alt="Avatar" className="border border-white rounded-full w-8 h-8" />
            <p className="text-primary-soft-blue">
              Created by{" "}
              <span className="text-white font-semibold hover:text-primary-cyan cursor-pointer">
                Hayden Buckley-Smith
              </span>
            </p>
          </div>
        </Card>
      </Layout>
    </div>
  );
}

export default App;
