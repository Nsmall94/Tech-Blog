const { Post } = require('../models');

const postdata = [
  {
    title: 'What is Bitcoin.',
    post_url: 'https://tech.co',
    user_id: 6
  },
  {
    title: 'What is a good coding laptop.',
    post_url: 'https://news.com',
    user_id: 8
  },
  {
    title: 'New game system looks great.',
    post_url: 'https://fake.com',
    user_id: 10
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;