const express = require("express");
const app = express()
var port = 8080;

app.get("/", function(req, res){
    var a = 1;
    var b = 2;
    var sum = a + b;
    return res.send("hello world")
})

app.listen(8080, function(){
    console.log("djsakjdsakldjdsadsalsajkl")
})