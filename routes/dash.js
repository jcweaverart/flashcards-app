const express = require('express');
const router = express.Router();

const coffeeDb = require('../db/coffeeDeck.json');
const apikey = require('../db/apikey.json');
const { data } = coffeeDb;
const { cards } = data;

/*-----Start Dashboard Routes------*/
    router.get('/', (req, res) => {
        if(req.cookies.username) {
            res.render('dash', {name: req.cookies.username});
        } else {
            return res.redirect('/login');
        }

    });

    router.post('/', (req, res) => {
        res.cookie('username', req.body.username);
        return res.redirect('/dash');
    });
/*-----End Dashboard Routes------*/


/*-----Start Deck Routes------*/
    router.get('/deck', (req, res) => {
            const deckSize = cards.length;
            const randomCard = Math.floor(Math.random() * deckSize);
            return res.redirect(`/dash/deck/${randomCard}?side=question`);
    });

    router.get("/deck/:id?", (req, res) => {

        let currentSide = req.query.side;
        let sideSwitcher = function() {
            if(req.query.side == "question") {
                return currentSide = "answer";
            } else if(req.query.side == "answer") {
                return currentSide = "question";
            }
        };

        let QorA = cards[req.params.id].question;
        let cardSide = function() {
            if(req.query.side == "question") {
                return QorA = cards[req.params.id].question;
            } else if(req.query.side == "answer") {
                return QorA = cards[req.params.id].answer;
            }
        };

        if(req.cookies.username) {

            res.locals = {
                deckName: data.title,
                hint: cards[req.params.id].hint,
                QorA: cardSide(),
                answer: cards[req.params.id].answer,
                question: cards[req.params.id].question,
                id: req.params.id,
                otherSide: sideSwitcher()
            };
            res.render('card');   
        } else {
            return res.redirect('/');
        } 
    });
/*-----End Deck Routes------*/

/*-----Start Weather Routes------*/
router.get('/weather', (req, res, next) => {
    const url = url("http://api.wunderground.com/api/057496073bbbd117/conditions/q/CA/San_Francisco.json");
    const urlStart = "Hello";
    res.render("weather", {data: urlStart});
});

/*-----End Weather Routes------*/

module.exports= router;