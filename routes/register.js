const express = require('express');
const router = express.Router();

/*-----Start Register Routes------*/
    router.get('/', (req, res) => {
        if(req.cookies.username) {
            return res.redirect('/dash');
        } else {
            res.render('register');
        }
        
    });

    router.post('/', (req, res) => {
        const fn = req.body.firstName;
        const ln = req.body.lastName;
        const un = req.body.username;

        console.log(fn && ln & un);
        if(fn && ln && un) {
            res.cookie('username', req.body.username);
            res.redirect('/dash');
        } else {
            console.log("fill in required parameters");
        }
    });
/*-----End Register Routes------*/

module.exports = router;