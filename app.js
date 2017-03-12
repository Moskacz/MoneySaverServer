var express = require('express')
var mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost/saver')

var spendingSchema = new mongoose.Schema({
    name: String,
    value: Number,
});

var Spending = mongoose.model('Spending', spendingSchema)

app.get('/', function(request, response) {
    response.send('Hello World!')
})

app.get('/insertSpending', function(request, response){
    var spendingToInsert = new Spending({name: "Bialka", value: 800})
    spendingToInsert.save(function(err){
        if (err) {
            console.log(err)
        } else {
            console.log(spendingToInsert)
        }
    })
    response.send('OK')
})

app.get('/allSpendings', function(request, response){
    Spending.find(function(err, spendings){
        response.json(spendings)
    })
})

app.listen(3000, function() {
    console.log('App is listening on port 3000')
})

