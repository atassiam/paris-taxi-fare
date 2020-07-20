'use strict';

var properties = require('../package.json')
var rides  = require('../service/rides');
var price  = require('../service/price');
var endTime  = require('../service/endTime');

var controllers = {
   about: function(req, res) {
    res.setHeader('Access-Control-Allow-Origin','*');
       var aboutInfo = {
           name: properties.name,
           description:properties.description,
           version: properties.version
       }
       res.send(aboutInfo);
   },
    getRides: function(req, res) {
        res.setHeader('Access-Control-Allow-Origin','*');
        rides.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    getPrice: function(req, res) {
        res.setHeader('Access-Control-Allow-Origin','*');
        price.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    getEndTime: function(req, res) {
        res.setHeader('Access-Control-Allow-Origin','*');
        endTime.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};

module.exports = controllers;