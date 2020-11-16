var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected bro!');
});

const kittySchema = new mongoose.Schema({
  name: String
});

// a document can have functions also.
kittySchema.methods.speak = function () {
  const greeting = "Meow name is ";
  console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak();

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});