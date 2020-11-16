// Collections in NOsql are actually tables.

// Inserting data in mongoDB

use harryKart
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98},{name: "Samsung 50s", price: 2000, rating: 4.5, qty: 233, sold: 98}])

