const User = require("../models/User");

const userData = [
  {
    id: 1,
    name: "Anna Turner",
    email: "anna@email.com",
    password: "password12345",
    timecard_id: 1,
  },
  {
    id: 2,
    name: "Timber Middlebrooks",
    email: "timbir@email.com",
    password: "password12345",
    timecard_id: 2,
  },
  {
    id: 3,
    name: "Travis Shanhun",
    email: "travis@email.com",
    password: "password12345",
    timecard_id: 3,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
