var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/countries/:country', (req, res, next) => {
  var countries = require("./countries.json")
  
  var countriesFiltered = countries.filter((country)=> 
    country.name.common.toLowerCase().includes(req.params.country.toLowerCase()) ||  country.name.official.includes(req.params.country.toLowerCase())

  )

  res.send(countriesFiltered);
});

module.exports = router;
