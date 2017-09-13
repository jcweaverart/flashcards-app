const express = require('express');
const router = express.Router();

/*-----Start Login Routes------*/
    router.get('/', (req, res, next) => {
        
        if(req.cookies.username) {
            return res.redirect('/dash');
        } else {
            res.render('login');
        }
        next();
    });
/*-----End Login Routes------*/

module.exports = router;