import "./index.css";
import { Zap, Clock } from "react-feather";

import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardPrice,
  CardDeadline,
  CardProfile,
  CardProfileName,
  CardContent,
} from "./components/Card/Card";
import { Avatar } from "./components/Avatar/Avatar";
import { Layout } from "./components/Layout/Layout";
import { CardSeperator } from "./components/CardSeperator/CardSeperator";

function App() {
  return (
    <Layout>
      <Card>
        <CardImage src="/equilibrium.jpg" alt="Equilibrium Logo" />
        <CardContent className="mt-6">
          <CardTitle>Equilibrium #3429</CardTitle>
          <CardDescription>Our Equilibrium collection promotes balance and calm</CardDescription>
          <div className="flex justify-between py-2">
            <div className="flex text-primary-cyan items-center space-x-1">
              <Zap className="fill-primary-cyan w-4 h-4" />
              <CardPrice>0.041 ETH</CardPrice>
            </div>
            <div className="flex text-primary-soft-blue items-center space-x-1">
              <Clock className="w-4 h-4" />
              <CardDeadline>3 days left</CardDeadline>
            </div>
          </div>
        </CardContent>
        <CardSeperator />
        <CardProfile>
          <Avatar src="/avatar.png" alt="Avatar" />
          <CardProfileName>
            Created by{" "}
            <span className="text-white font-semibold hover:text-primary-cyan cursor-pointer">
              Hayden Buckley-Smith
            </span>
          </CardProfileName>
        </CardProfile>
      </Card>
    </Layout>
  );
}

export default App;
