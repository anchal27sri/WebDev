const express = require("express");
const app = express();
const port = 80;
const path = require("path");

// EXPRESS SPECIFIG STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// PUB SPECIFIG STUFFrs
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/',(req,res)=> {
   params = { }
    res.status(200).render('index.pug', params);
});

app.get('/join',(req,res)=> {
    params = { }
     res.status(200).render('join.pug', params);
 });


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})