var mongoose = require('mongoose')

var CategorySchema = new mongoose.Schema({
    title: String,
    colorHex: String
})

module.exports = mongoose.model('Category', CategorySchema)
