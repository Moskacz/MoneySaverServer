var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/saver')

var transactionSchema = new mongoose.Schema({
    identifier: Number,
    title: String,
    value: Number,
    category: String
})

var Transaction = mongoose.model('Transaction', transactionSchema)

app.put('/transaction', function(request, response){
    var title = request.body.title
    var value = request.body.value
    var category = request.body.category
    
    if (typeof title !== 'undefined' && typeof value !== 'undefined' && typeof category !== 'undefined') {
        var transaction = new Transaction(request.body)
        transaction.save(function(err){
           if (err) {
                request.status(500)
                request.send("error")
                console.log(err)
           } else {
                response.status(200)
                response.send("OK")
           }
        })
    } else {
        response.status(500)
        response.send("invalid json")
    }
})

app.listen(3000, function() {
    console.log('App is listening on port 3000')
})