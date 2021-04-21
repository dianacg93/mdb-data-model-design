const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/booksdb', {useUnifiedTopology:true, useNewUrlParser:true}).then(() => {
    console.log("MongoDB connection Success");
}).catch(err => {
    console.error("Connection failed", err.message);
});

mongoose.set('debug', true);

const db = mongoose.connection;

module.exports = db;