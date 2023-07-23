const router = require("express").Router()
const Blogpost = require('../../models/Blogpost')

router.get('/', async (req, res) => {
    try {
        const allPosts = await Blogpost.findAll({})

        res.status(200).json(allPosts)
    } catch (err) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

module.exports = router