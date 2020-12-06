const express = require("express");
const app = express();
const port = 80;
const path = require("path");
const bodyparser = require("body-parser")

// MONGODB
// 1. Initilization part
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/joinDance',{userNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected bro!');
});

// 2. Creating Schema
var joinSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    address: String,
    more: String,
});

// 3. Creating contact
var Info = mongoose.model('joinInfo', joinSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// PUB SPECIFIG STUFFs
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/',(req,res)=> {
   params = { }
    res.status(200).render('index.pug', params);
});

app.get('/join',(req,res)=> {
    const params = { }
    res.status(200).render('join.pug', params);
 });


app.post('/join',(req,res)=> {
    console.log('Hitting posting');
    var myDdata = new Info(req.body);
    myDdata.save().then(() => {
        res.send("This item has been saved to database")
    }).catch(()=> {
        res.status(400).send("Item was not saved to the database")
    });
    // res.status(200).render('join.pug');
});


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})