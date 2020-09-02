const express = require("express");
const morgan = require("morgan")
const app = express()
const path = require("path");
const handlebars = require("express-handlebars")
var port = 8080;

// HTTP logger
app.use(morgan('combined'))
console.log("dirname", __dirname)
app.use(express.static(path.join(__dirname, 'public')))

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
}))
app.set('view engine',  'hbs')
app.set('views', path.join(__dirname, 'resources','views'))

app.get("/", function(req, res){
    res.render('home')
})

app.get("/tienn", function(req, res){
    res.render('tien')
})

app.listen(8080, function(){
    console.log("djsakjdsakldjdsadsalsajkl")
})