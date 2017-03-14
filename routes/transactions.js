var express = require('express')
var router = express.Router()
var Transaction = require('../models/transaction.js')

router.get('/', function(request, response, next){
    Transaction.find(function(error, transactions){
        if (error) {
            next(error)
        } else {
            response.json(transactions)
        }
    })
})

router.get('/:id', function(request, response, next){
    Transaction.findById(request.params.id, function(error, transaction){
        if (error) {
            next(error)
        } else {
            response.send(transaction)
        }
    })
})

module.exports = router