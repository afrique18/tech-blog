const router = require("express").Router();
const { Comment } = require('../../models/');
const withAuth = require('../..utils/auth');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        console.log(newComment);
        res.status(200).json(newComment);
    } catch (err) {
        console.log (err);
        res.status(400).json(err);
    }
}); 

module.exports = router;