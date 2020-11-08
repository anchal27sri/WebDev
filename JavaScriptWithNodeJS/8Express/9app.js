// #Video 72
// How to deal with static files and HTML files
/*
Static files are those files which we want to be publicly available on server. That is anyone can download given the link.
We use static files for mostly storing common data.
*/
/*
What is template engine?
It outputs in form of HTML. It forms a template. We just have to send the information to the template engine to get the
template.
To create a pug template: 
set the template engine as pug.
*/
const express = require("express");
const app = express();
const port = 80;
const path = require("path");

// for serving static files
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo end point
app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey Parru', message: 'Hello there! Happy Birthday!' });
})

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