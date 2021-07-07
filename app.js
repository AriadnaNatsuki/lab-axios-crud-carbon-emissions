//https://www.carboninterface.com/api/v1/estimates
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const hbs = require('hbs');
const createError=require('http-errors')

// require spotify-web-api-node package here:

const app = express();
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(logger('dev'))

app.set('view engine', 'hbs');
//app.set('views', path.join(__dirname + '/views'));
app.set('views', __dirname + '/views')
hbs.registerPartials(__dirname + '/views/Partials')


//Routes
const routes = require('./config/routes')
app.use('/',routes)
//console.log(process.env.CLIENT_ID)

//Error handler
app.use((req, res, next) => {
    next(createError(404))
})
//Invocado desde misc.controller.js 
app.use((error, req, res, next) => {
    console.log(error)
    if (!error.status) {
        error=createError(500)
    }
    res.status(error.status)
    res.render('error',error)
})
const PORT = 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));