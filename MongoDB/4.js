// setting up database

use harryKart;
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

db.items.insertMany([
    {name: "Samsung 70s", price: 22000, rating: 4.5, qty: 233, sold: 98},
    {name: "Samsung 99s", price: 20300, rating: 2.5, qty: 233, sold: 98},
    {name: "Samsung 51s", price: 20300, rating: 2.5, qty: 22, sold: 98},
    {name: "Samsung 52s", price: 22000, rating: 4.5, qty: 24, sold: 98},
    {name: "Samsung 53s", price: 20300, rating: 4.5, qty: 24, sold: 98}
])

// finding item with price = 220000
db.items.find({price:22000})

// finding items with price greater than or equal to 20300
db.items.find({price:{$gte: 22000}})

// finding items with price less than 20300
db.items.find({price:{$lt: 22000}})

// for AND use , (comma)
db.items.find({price:{$lt: 22000}, rating: 2.5, qty: {$gte : 100}})

// for OR use $or
db.items.find({
    $or: [{price: {$lt: 22000}, rating: 2.5, qty: {$gte : 100}}]
})

// To select which things we want in return
db.items.find(
    {price:{$lt: 22000}, rating: 2.5, qty: {$gte : 100}}, 
    { name: 1, price: 1, qty: 1, _id: 0}
)

// Deleting items from the mongo db database
db.items.deleteOne({price:{$lt: 22000}, rating: 2.5, qty: {$gte : 100}}); // deletes first matching item.

// Deleting items from the mongo db database
db.items.deleteMany({price:{$lt: 22000}, rating: 2.5, qty: {$gte : 100}}); // deletes all matching items.


