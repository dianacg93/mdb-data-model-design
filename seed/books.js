const db = require('../db');
const Book = require('../models/book');
const Publisher = require('../models/publisher');

db.on('error', console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    const penguinBooks = await Publisher.find({name: 'Penguin Books'})
    const harperCollinsBooks = await Publisher.find({name: 'HarperCollins'})

    const books = 
    [
        {title: "How To Fight", author: "Thich Nhat Hanh", published_date: "2012", publisher_id: penguinBooks[0]._id},
        {title: "Falling Off The Map", author: "Pico Iyer", published_date: "1998", publisher_id: penguinBooks[0]._id},
        {title: "Getting Things Done", author: "David Allen", published_date: "2016", publisher_id: harperCollinsBooks[0]._id},
        {title: "The Alchemist", author: "Paulo Coelho", published_date: "1999", publisher_id: harperCollinsBooks[0]._id},
    ]

    await Book.insertMany(books)
    console.log("Books has been created")
}

const run = async () =>{
    await main();
    db.close();
}

run();

//command for the terminal 
//node seed/[name of file].js