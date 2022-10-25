var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let ramdomNumber = Math.random()*10;
    let roundValue = Math.round(ramdomNumber);
    let froundValue = Math.fround(ramdomNumber);

  res.send(`fround applied to  ${ramdomNumber}  is  ${froundValue} <br>
            round applied to  ${ramdomNumber}  is  ${roundValue}`);
});

module.exports = router;