const express = require('express');
const router = express.Router();

/*-----Start Index Routes------*/
    router.get('/', (req, res, next) => {
        if(req.cookies.username) {
            return res.redirect('/dash');
        } else {
            res.render("index");
        }
        next();
    });

    router.post('/', (req, res, next) => {
        res.clearCookie('username');
        return res.redirect('/');
        res.render('index');
        next();
    });
/*-----End Index Routes------*/


module.exports= router;