const express = require('express');
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname,'public')));

const mainRouter = require('./routes/index');
const dashRouter = require('./routes/dash');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

app.use('/', mainRouter);
app.use('/dash', dashRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);


/*
 * Normalize a port into a number, string, or false.
 */

/*-----Start Port------*/
    function normalizePort(val) {
        var port = parseInt(val, 10);
    
        if (isNaN(port)) {
        // named pipe
        return val;
        }
    
        if (port >= 0) {
        // port number
        return port;
        }
    
        return false;
    }

    var port = normalizePort(process.env.PORT || '3000');
    app.set('port', port);


    app.listen(port, () => {
        console.log('Connected and running on port 3000!');
    });
/*-----End Port------*/