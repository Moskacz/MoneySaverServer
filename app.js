var express = require('express')
var app = express()

app.get('/', function(request, response) {
    response.send('Hello World!')
})

app.get('/jsonTest', function(request, response){
    response.json({title:'Item1'})
})

app.listen(3000, function() {
    console.log('App is listening on port 3000')
})