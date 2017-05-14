var express = require('express')
var router = express.Router()
var Transaction = require('../models/transaction.js')

router.get('/', function(request, response, next){
    Transaction.find(function(error, transactions){
        if (error) {
            next(error)
        } else {
            var dictionary = {
                "transactions": transactions
            }
            response.json(dictionary)
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

router.post('/', function(request, response, next){
    Transaction.create(request.body, function(error, transaction){
        if (error) {
            next(error)
        } else {
            response.send(transaction)
        }
    })
})

router.put('/:id', function(request, response, next){
    Transaction.findByIdAndUpdate(request.params.id, request.body, function(error, transaction){
        if (error) {
            next(error)
        } else {
            response.send(transaction)
        }
    })
})

router.delete('/:id', function(request, response, next){
    Transaction.findByIdAndRemove(request.params.id, function(error, transaction){
        if (error) {
            next(error)
        } else {
            response.send(transaction)
        }
    })
})

router.delete('/', function(request, response, next){
    Transaction.remove({}, function(error){
        if (error) {
            next(error)
        } else {
            response.send('OK')
        }
    })
})

module.exports = router