const request = require("supertest");
const assert = require('assert');
const expect = require('chai').expect
const express = require("express");
const app = express();

const routes = require('../api/routes');
routes(app);

describe('/price route works', function() {

    it('it should return correct price', function() {
      return request(app)
        .get('/price/5/2020-06-19T13:40:20')
        .then(function(response){
            assert.equal(response.status, 200);
            assert.equal(response.text, "{\"price\":13.5}");
        })
    });

    it('ride at 1PM for 2 miles should cost 6 EUR', function() {
        return request(app)
          .get('/price/2/2020-06-19T13:00:00')
          .then(function(response){
              assert.equal(response.status, 200);
              assert.equal(response.text, "{\"price\":6}");
          })
      });

      it('ride at 3AM for 2 miles should not cost 6 EUR', function() {
        return request(app)
          .get('/price/2/2020-06-19T03:00:00')
          .then(function(response){
              assert.equal(response.status, 200);
              assert.notEqual(response.text, "{\"price\":6}");
          })
      });

      it('route should follow this pattern /price/:distance/:time', function() {
        return request(app)
          .get('/price/2020-06-19T03:00:00/3')
          .then(function(response){
              assert.equal(response.status, 200);
              assert.equal(response.text, "{\"price\":null}");
          })
      });

});
