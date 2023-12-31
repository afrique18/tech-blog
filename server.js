const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

//Uncomment these once we fill out routes and helpers folders
const routes = require("./controllers");
// const helpers= require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 4568;
// Put helpers back in here after we add file in the helper folder
const hbs = exphbs.create({ });

const sess = {
    secret: "Secret",
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

// Un-comment this out once we fill out routes
 app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listen to port ${PORT}`));
});
