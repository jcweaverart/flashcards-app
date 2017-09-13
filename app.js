const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static('public'),);

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const mainRouter = require('./routes/index');
const dashRouter = require('./routes/dash');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

app.use('/', mainRouter);
app.use('/dash', dashRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);


/*-----Start Port------*/
    const port = 3000;
    app.listen(port, () => {
        console.log('Connected and running on port 3000!');
    });
/*-----End Port------*/