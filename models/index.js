const Post = require('./Post');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');


Blogpost.hasMany(Post, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(Blogpost, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'

});

Comment.belongsTo(Blogpost, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'

});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = {Post, Blogpost, Comment };