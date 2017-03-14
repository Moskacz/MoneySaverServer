var mongoose = require('mongoose')

var TransactionSchema = new mongoose.Schema({
    title: String,
    category: String,
    value: Number
})

module.exports = mongoose.model('Transaction', TransactionSchema)