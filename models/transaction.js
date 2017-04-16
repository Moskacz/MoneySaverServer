var mongoose = require('mongoose')

var TransactionSchema = new mongoose.Schema({
    title: String,
    category: String,
    value: Number,
    creationTimeInterval: Number
})

module.exports = mongoose.model('Transaction', TransactionSchema)