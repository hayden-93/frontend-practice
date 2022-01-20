import "./index.css";

import {
  Avatar,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardPrice,
  CardDeadline,
  CardProfile,
  CardProfileName,
  CardContent,
  CardSeperator,
  Layout,
} from "./components";

function App() {
  return (
    <Layout>
      <Card>
        <CardImage src="/equilibrium.jpg" alt="Equilibrium Logo" />
        <CardContent className="mt-6">
          <CardTitle>Equilibrium #3429</CardTitle>
          <CardDescription>Our Equilibrium collection promotes balance and calm</CardDescription>
          <div className="flex justify-between py-2">
            <CardPrice>0.041 ETH</CardPrice>
            <CardDeadline>3 days left</CardDeadline>
          </div>
        </CardContent>
        <CardSeperator />
        <CardProfile>
          <Avatar src="/avatar.png" alt="Avatar" />
          <CardProfileName>Hayden Buckley-Smith</CardProfileName>
        </CardProfile>
      </Card>
    </Layout>
  );
}

export default App;
