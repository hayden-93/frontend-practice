import Faker from "@faker-js/faker";

export const faker = {
  uuid: () => Faker.datatype.uuid(),
  image: (width: number = 311, height: number = 311, random: boolean = true) =>
    Faker.image.image(width, height, random),
  name: () => Faker.name.firstName(),
  number: (
    options: number | { min?: number; max?: number; precision?: number } = { min: 1000, max: 9999, precision: 1 }
  ) => Faker.datatype.number(options),
  description: () => Faker.company.bs(),
  fullName: () => `${Faker.name.firstName()} ${Faker.name.lastName()}`,
  avatar: () => Faker.image.avatar(),
  random: (values: any[]) => Faker.helpers.randomize(values),
};
