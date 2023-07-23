const { Blogpost } = require("../models");

const router = require("express").Router();
// Get all post for homepage
router.get("/", async (req, res) => {
    try {
        const postData = await Blogpost.findAll({
        include: [User],
        });
        const blogposts = postData.map((post) => post.get({plain: true}));
        res.render("blog", {blogposts});
    } catch (err) {
        res.status(500).json(err)
    }
});
// get single post
router.get("/post/:id", async (req, res) => {

})

// Get login
router.get("/login", (req, res) => {

})



// Get a signup
router.get("/signup", async (req, res) => {

})

module.exports = router;