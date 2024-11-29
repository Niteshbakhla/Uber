const express = require("express")
const app = express();

app.get("/", (req, res) => {
            res.send("Hey this is working");
});


module.exports = app