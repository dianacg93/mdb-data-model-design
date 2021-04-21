const db = require('./db')
const Publisher = require('./models/publisher')
const Book = require('./models/book')

db.on("error", console.error.bind(console, "MongoDB connection error"))

//node seed/[name of file].js

// CRUD actions 

//Find a book

const findAlchemistBook = async () => {
    const theAlchemist = await Book.find({title: "The Alchemist"});
    console.log(theAlchemist)
}

//Create a book
//update a book
//delete a book


const run = async () => {
    await findAlchemistBook();
    process.exit();
}

run();



//to run it 
//node query.js