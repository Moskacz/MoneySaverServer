var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/saver')
.then(() => console.log('connection successfull'))
.catch((err) => console.log(err))

var app = express()

var transactionsRouting = require('./routes/transactions')
app.use('/transactions', transactionsRouting)


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, function() {
    console.log('App is listening on port 3000')
})