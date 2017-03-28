var express = require('express')
var router = express.Router()
var Category = require('../models/category.js')

router.get('/', function(request, response, next){
    Category.find(function(error,categories) {
        if (error) {
            next(error)
        } else {
            var dictionary = {
                "categories": categories
            }
            response.json(dictionary)
        }
    })
})

router.post('/', function(request, response, next){
    Category.create(request.body, function(error, category) {
        if (error) {
            next(error)
        } else {
            response.send(category)
        }
    })
})

router.put('/:id', function(request, response, next){
    Category.findByIdAndUpdate(request.params.id, request.body, function(error, category) {
        if (error) {
            next(error)
        } else {
            response.send(category)
        }
    })
})

router.delete('/:id', function(request, response, next){
    Category.findByIdAndRemove(request.params.id, function(error, category) {
        if (error) {
            next(error)
        } else {
            response.send(category)
        }
    })
})

module.exports = router