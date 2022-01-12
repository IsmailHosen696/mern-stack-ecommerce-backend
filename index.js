require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3001;
const connection = require('./db');
connection();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ msg: "accecpt" });
});

app.listen(port, () => console.log(`listening on ${port}`));