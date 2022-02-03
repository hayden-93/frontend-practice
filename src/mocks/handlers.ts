import { rest } from "msw";

import { faker } from "@nft/utils";

const mockData = [
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
];

export const handlers = [
  rest.get("/marketplace", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];
