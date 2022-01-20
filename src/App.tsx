import { useState } from "react";

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
  const [image] = useState({ src: "/equilibrium.jpg", alt: "Equilibrium Logo" });
  const [title] = useState("Equilibrium #3429");
  const [description] = useState("Our Equilibrium collection promotes balance and calm");
  const [price] = useState("0.041 ETH");
  const [deadline] = useState("3 days left");
  const [name] = useState("Hayden Buckley-Smith");

  return (
    <Layout>
      <Card>
        <CardImage src={image.src} alt={image.alt} />
        <CardContent className="mt-6">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="flex justify-between py-2">
            <CardPrice>{price}</CardPrice>
            <CardDeadline>{deadline}</CardDeadline>
          </div>
        </CardContent>
        <CardSeperator />
        <CardProfile>
          <Avatar src="/avatar.png" alt="Avatar" />
          <CardProfileName>{name}</CardProfileName>
        </CardProfile>
      </Card>
    </Layout>
  );
}

export default App;
