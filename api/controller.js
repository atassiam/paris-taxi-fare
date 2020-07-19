'use strict';

var properties = require('../package.json')
var rides  = require('../service/rides');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
    getRides: function(req, res) {
        rides.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};

module.exports = controllers;