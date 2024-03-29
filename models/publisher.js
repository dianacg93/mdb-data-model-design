const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Publisher = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        url: {type: String, required: true}
    },
    {timestamps: true},
);

module.exports = mongoose.model('publisher', Publisher)