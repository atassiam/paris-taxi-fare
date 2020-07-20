'use strict';

const controller = require('./controller');

module.exports = function(app) {
    app.route('/')
        .get(controller.about);
    app.route('/about')
       .get(controller.about);
    app.route('/rides')
       .get(controller.getRides);
    app.route('/price/:distance/:time')
       .get(controller.getPrice);
    app.route('/end/:time/:duration')
       .get(controller.getEndTime);
};