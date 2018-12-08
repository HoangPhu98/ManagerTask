var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var engine = require('ejs-mate')
var config = require('./config/config')



var app = express()
var port = config.port

var server = require('http').Server(app);
var io = require('socket.io')(server);

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


var mainController = require('./app/controllers/main')
var homeController = require('./app/controllers/home')
var tablesController = require('./app/controllers/tables')
var calendarController = require('./app/controllers/calendar')
var tableController = require('./app/controllers/table')
var barController = require('./app/controllers/bar')
var profileController = require('./app/controllers/profile')
var loginController = require('./app/controllers/login')
var signupController = require('./app/controllers/signup')

app.use('/', mainController)
app.use('/home', homeController)
app.use('/tables', tablesController)
app.use('/calendar', calendarController)
app.use('/table', tableController)
app.use('/bar', barController)
app.use('/profile', profileController)
app.use('/login', loginController)
app.use('/signup', signupController)



io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

server.listen(port, () => {
    console.log("App running at http://127.0.1:3300")
})
