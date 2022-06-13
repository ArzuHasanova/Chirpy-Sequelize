var express = require("express");

var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);

app.listen(5500);