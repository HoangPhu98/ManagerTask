var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var engine = require('ejs-mate')
var config = require('./config/config')

var app = express()
var port = config.port

app.engine('ejs', engine);
 
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var homeController = require('./app/controllers/home')

app.use('/', homeController)










app.listen(port, () => {
    console.log("App running at http://127.0.1:3300")
})
