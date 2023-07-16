const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
// Uncomment once we finsih definning our routes
// const apiRoutes = require("./api");

router.use("/", homeRoutes);

// Uncomment this after the api routes are completed
// router.use("/api", apiRoutes);

module.exports = router;
