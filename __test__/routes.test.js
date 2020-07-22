const request = require("supertest");
const express = require("express");
const app = express();

const routes = require('../api/routes');
routes(app);

test("/route works", done => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({"name":"paris-taxi-fare-microservice","description":"Paris Taxi Fare application","version":"1.0.0"})
    .expect(200, done);
});

test("/about route works", done => {
  request(app)
    .get("/about")
    .expect("Content-Type", /json/)
    .expect({"name":"paris-taxi-fare-microservice","description":"Paris Taxi Fare application","version":"1.0.0"})
    .expect(200, done);
});

test("/rides route works", done => {
  request(app)
    .get("/rides")
    .expect("Content-Type", /json/)
    .expect(200, done);
});

test("/price route works", done => {
  request(app)
    .get("/price/1/2020-06-19T11:00:00")
    .expect(200, done);
});