const { sequelize } = require("../db");
const { User, Board, Cheese } = require("./models/index");

describe("User, Cheese, & Board Models", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });
});

describe("User Model", () => {
  test("user model can be created", async () => {
    const user1 = await User.create({
      name: "Ceejay",
      email: "cj@hotmail.com",
    });
    expect(user1.name).toBe("Ceejay");
    expect(user1.email).toBe("cj@hotmail.com");
    expect(user1).toBeDefined;
  });
});

describe("Board Model", () => {
  test("can create Board model", async () => {
    const board1 = await Board.create({
      type: "Savory",
      description: "Nigerian",
      rating: 6,
    });
    expect(board1.type).toBe("Savory");
    expect(testBoard.description).toBe("Nigerian");
    expect(testBoard.rating).toBe(6);
  });
});

describe("Cheese model", () => {
  test("can create cheese model", async () => {
    const cheese1 = await Cheese.create({
      title: "Asiago",
      description: "Italian",
    });
    expect(cheese1.title).toBe("Asiago");
    expect(cheese1).toBeDefined();
    expect(testCheese.description).toBe("Italian");
  });
});
