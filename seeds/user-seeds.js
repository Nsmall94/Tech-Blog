const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'pstar',
    email: 'patrickstar0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'bobsponge',
    email: 'squarepants@sogou.com',
    password: 'password123'
  },
  {
    username: 'gsnail',
    email: 'garythesnail@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;