const User = require('./Post');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');


User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blogpost.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

});

Comment.belongsTo(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {User, Blogpost, Comment };