const router = require("express").Router();
const { Blogpost } = require('../../models/Blogpost');

router.post('/', async (req, res) => {
    try {
        const blogData = await Blogpost.create(req.body);

        req.session.save(() => { 
            req.session.blogpost_id = blogData.id;
            req.session.blogpost_name = blogData.username;
            req.session.commenter = blogData.username;
            req.session.logged_in = true;
            req.session.is_author = true;
            res.status(200).json(blogData);
        });
    } catch(err) {
        res.status(400).json(err);
    }
});
router.post('/login', async (req, res) => {
    try {
        const blogData = await Blogpost.findOne(
            {
                where: { email: req.body.email },
            },
            {
                include: [{ attributes: ['username']}],
            }
        );

        if (!blogData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await blogData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.blogData_id = blogData.id;
            req.session.blogpost_name = blogData.username;
            req.session.commenter = blogData.username;
            req.session.logged_in = true;
            res.json({ blogpost: blogData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else (
        res.status(404).end();
    }
});

module.exports = router;