var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected bro!');
});

// creating a schema
const kittySchema = new mongoose.Schema({
  name: String
});

// a document can have functions also.
kittySchema.methods.speak = function () {
  const greeting = "My Greetings!";
  console.log(greeting);
}

const Kitten = mongoose.model('Kittyy', kittySchema);

// const kittenName = new Kitten({ name: 'Tom' });
// console.log(kittenName.name);

const fluffy = new Kitten({ name: 'Cat' });
// fluffy.speak();

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});