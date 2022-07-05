require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs'); ///use ejs as template engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/route')(app);

app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
)