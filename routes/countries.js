var express = require('express');
var router = express.Router();

router.get('/:country', (req, res, next) => {
  var countries = require("./countries.json")
  
  var searchCountry = req.params.country.toLowerCase()
  var countriesFiltered = countries.filter((country)=> 
    country.name.common.toLowerCase().includes(searchCountry) || country.name.official.includes(searchCountry)
  )
  
  res.setHeader('Content-Type', 'application/json');
  res.send(countriesFiltered);
});

router.get('/', (req, res, next) => {
  var countries = require("./countries.json")

  res.setHeader('Content-Type', 'application/json');
  res.send(countries);
});

module.exports = router;
