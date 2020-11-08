// Express is used for routing between different web pages. Earlier we were doing it by if-else statements.
const express = require("express");

const app = express();
const port = 80;

app.get("/", (req, res) => {
    res.send("This is my first epxress app with Harry");
});

app.get("/about", (req, res) => {
    res.status(200).send("This is my first epxress app with Harry");
});

app.post("/about", (req, res) => {
    res.send("This is my about post epxress app with Harry");
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})