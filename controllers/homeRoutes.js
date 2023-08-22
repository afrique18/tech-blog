const router = require("express").Router();
// const { model } = require("mongoose");
const { Blogpost, Comment, Post} = require("../models");
const withAuth = require('../utils/auth');


// Get all post for homepage
router.get("/", async (req, res) => {
    try {
        const postData = await Blogpost.findAll({
            include: [
                {
                    model: Blogpost,
                    attributes: [username],
                },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render("homepage", {
            posts, logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err)
    }
});
// get single post
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const postData = await Blogpost.findByPk(req.session.blogpost_id, {
            attributes: {
                exclude: ['password']
            },
            include: [
                {
                    model: Post,
                },
            ],
        });

        const Blogpost = postData.get({ plain: true });
        console.log(blogpost);
        res.render('dashboard', {
            ...blogpost,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



// Get new post
router.get("/new-post", withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(reg.session.blogpost_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: post }],
        });

        const blogpost = postData.get({ plain: true });
        res.render('new-post', {
            ...blogpost,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: [Blogpost],
                },
                {
                    model: Blogpost,
                    attributes: ['username', 'id'],
                },
            ],
        });

        const post = postData.get({ plain: true });

        if (post.blogpost_id === req.session.blogpost_id) {
            res.render('post', {
                ...post,
                blogpost_id: req.session.blogpost_id,
                blogpost_name: req.session.blogpost_name,
                commenter: req.session.commenter,
                logged_in: req.session.logged_in,
            });
        } else {
            res.render('comment', {
                ...post,
                blogpost_id: req.session.blogpost_id,
                blogpost_name: req.session.blogpost_name,
                commenter: req.session.commenter,
                logged_in: req.session.logged_in,
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get login
router.get('/login', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('./dashboard');
            return;
        }
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Signup
router.get("/signup", async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;