var express = require('express');
var router = express.Router();

router.get('/:country', (req, res, next) => {
  var countries = require("./countryData.json")
  
  var searchCountry = req.params.country.toLowerCase()
  var countriesFiltered = countries.filter((country)=> 
    country.name.common.toLowerCase().includes(searchCountry) || country.name.official.includes(searchCountry)
  )
  
  res.status(200).json(countriesFiltered);
});

router.get('/', (req, res, next) => {
  var countries = require("./countryData.json")
  res.status(200).json(countries);
});

module.exports = router;
