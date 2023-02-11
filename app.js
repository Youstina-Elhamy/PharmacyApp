const dboperations = require('./dboperations');
var db = require('./dboperations');
var Products = require('./products')


dboperations.getProducts().then(result =>{
    console.log(result)
})