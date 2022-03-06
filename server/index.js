const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 2000;
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});