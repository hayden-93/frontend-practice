import { useState } from "react";

import { faker } from "./utils";
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

const createMocks = (() => [
  {
    id: faker.uuid(),
    image: { src: "/equilibrium.jpg", alt: "Equilibrium Logo" },
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    price: 0.041,
    deadline: { time: 3, format: "day" },
    user: { name: "Jules Wyvern", avatar: { src: "/avatar.png", alt: "Avatar" } },
  },
  ...new Array(3).fill(null).map(() => ({
    id: faker.uuid(),
    image: { src: faker.image(), alt: faker.description() },
    title: `${faker.name()} #${faker.number()}`,
    description: faker.description(),
    price: faker.number({ min: 0, max: 1, precision: 0.001 }),
    deadline: {
      time: faker.number({ min: 1, max: 30, precision: 1 }),
      format: faker.random(["second", "minute", "hour", "day", "week"]),
    },
    user: { name: faker.fullName(), avatar: { src: faker.avatar(), alt: faker.description() } },
  })),
])();

function App() {
  const [nftPreviews, setNftPreviews] = useState(() => createMocks);

  return (
    <Layout>
      {nftPreviews.map(({ id, image, title, description, price, deadline, user }) => (
        <Card key={id}>
          <CardImage src={image.src} alt={image.alt} />
          <CardContent className="mt-6">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <div className="flex justify-between py-2">
              <CardPrice>{price}</CardPrice>
              <CardDeadline timeRemaining={deadline.time} format={deadline.format} />
            </div>
          </CardContent>
          <CardSeperator />
          <CardProfile>
            <Avatar src={user.avatar.src} alt={user.avatar.alt} />
            <CardProfileName>{user.name}</CardProfileName>
          </CardProfile>
        </Card>
      ))}
    </Layout>
  );
}

export default App;
