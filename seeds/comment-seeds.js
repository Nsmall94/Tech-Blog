const { Comment } = require('../models');

const commentdata = [
    {
      comment_text: 'What is Bitcoin.',
      user_id: 6,
      post_id: 1
    },
    {
        comment_text: 'What is a good coding laptop.',
        user_id: 8,
        post_id: 6
      },
    {
      comment_text: 'New game system looks great.',
      user_id: 10,
      post_id: 12
    }
  ];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;