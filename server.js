require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const flash = require('express-flash')
const routes = require('./routes')
const passport = require('./lib/passport')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));
app.set('view engine', 'ejs'); ///use ejs as template engine

app.use(passport.initialize());
app.use(routes);
app.use(flash());

app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
)