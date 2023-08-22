const sequelize = require('../config/connection');
const { Blogpost } = require('../models');

const blogPostData = require('./blogPostData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const blogposts = await Blogpost.bulkCreate(blogPostData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogpost of postData) {
    await Blogpost.create({
      ...blogpost,
      user_id: blogposts[Math.floor(Math.random() * blogposts.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();
