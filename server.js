/* Server for Burgers 2 application for UTA Boot Camp */

// Express dependencies.
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const burgerRoute = require("./routes/burgerRoute");
const eaterRoute = require("./routes/eaterRoute");

/* app.use(burgerRoute);
app.use(eaterRoute); */

const db = require("./config/db");

sequelize.sync({ force: true });

app.listen(PORT, function() {
  console.log("Server listening at port " + PORT);
});
