const { sequelize } = require("./db");
const { User, Board, Cheese } = require("./Models/index.js");

describe("User, Cheese, & Board Models", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });
  test("can create user model", async () => {
    const user1 = await User.create({
      name: "Ceejay",
      email: "cj@hotmail.com",
    });
    expect(user1).toBeDefined;
    expect(user1.name).toBe("Ceejay");
  });

  //   test("Board can be created", async () => {
  //     const board = await Board.create({
  //       type: "Monopoly",
  //       description: "It's take 2 to toggle",
  //       rating: 7,
  //     });
  //     expect(board).toBeDefined();
  //     expect(board.type).toBe("Monopoly");
  //   });

  //   test("can create Cheese", async () => {
  //     const cheese = await Cheese.create({
  //       title: "American Cheese",
  //       description: "Guarantee you won't resist",
  //     });
  //     expect(cheese).toBeDefined();
  //     expect(cheese.title).toBe("American Cheese");
  //     expect(cheese.description).toBe("Guarantee you won't resist");
  //   });

  //   test("boards can be added to user", async () => {
  //     await sequelize.sync({ force: true });
  //     const user2 = await User.create({
  //       name: "Miles",
  //       email: "mike@hotmail.com",
  //     });

  //     const board1 = await Board.create({
  //       type: "Snake & Ladder",
  //       description: "Enjoy the best snake board game",
  //       rating: 7,
  //     });

  //     const board2 = await Board.create({
  //       type: "Ludo",
  //       description: "The best african dice game",
  //       rating: 8,
  //     });

  //     const board3 = await Board.create({
  //       type: "Scramble",
  //       description: "Win the ultimate price",
  //       rating: 7,
  //     });
  //     await user2.addBoards([board1, board2, board3]);
  //     const userBoards = await user2.getBoards();
  //     expect(userBoards.length).toBe(3);
  //   });

  //   test("Board has many cheeses and cheese can be on many boards", async () => {
  //     await sequelize.sync({ force: true });
  //     const board1 = await Board.create({
  //       type: "Lions",
  //       description: "Enjoy the best lion board game",
  //       rating: 7,
  //     });

  //     const board2 = await Board.create({
  //       type: "Snakes",
  //       description: "The best snake dice game",
  //       rating: 8,
  //     });

  //     const board3 = await Board.create({
  //       type: "wish",
  //       description: "Your dreams manifested",
  //       rating: 7,
  //     });

  //     const cheese1 = await Cheese.create({
  //       title: "Cheddar",
  //       description: "Oh happy day",
  //     });

  //     const cheese2 = await Cheese.create({
  //       title: "Mozzarella",
  //       description: "I'm loving it",
  //     });

  //     await board1.addCheese([cheese1, cheese2]);
  //     const boardCheeses = await board1.getCheeses();
  //     expect(boardCheeses.length).toBe(2);
  //   });
});
