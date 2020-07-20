var moment = require('moment');

var price = {
   find: function(req, res) {
    console.log("distance : " + req.params.distance);

    var startTime = moment(req.params.time);

    //define late night period
    var beforeLateTime = moment(startTime).set({hour: 6,minute:0,second:0});
    var afterLateTime = moment(startTime).set({hour: 20,minute:0,second:0});

    //define busy period
    var beforeBusyTime = moment(startTime).set({hour:16,minute:0,second:0});
    var afterBusyTime = moment(startTime).set({hour: 19,minute:0,second:0});

    console.log("start time : " + startTime);
    console.log("beforeLateTime : " + beforeLateTime);
    console.log("afterLateTime : " + afterLateTime);
    console.log("beforeBusyTime : " + beforeBusyTime);
    console.log("afterBusyTime : " + afterBusyTime);

    var basicFare = (0.5 * 5 * req.params.distance) + 1;
    var priceResult = 0;
    var lateRideFare = 0.5;
    var busyPeriodFare = 1;

    if(moment(startTime).isBetween(beforeLateTime, afterLateTime)){
        console.log("basicFare");
        priceResult = basicFare;
    }
    else{
        console.log("lateRideFare");
        priceResult = basicFare + lateRideFare;
    }
    if(moment(startTime).isBetween(beforeBusyTime, afterBusyTime)){
         console.log("busyPeriodFare");
         priceResult = basicFare + busyPeriodFare;
     }
    res.send(JSON.stringify({price : priceResult}));
}
};

module.exports = price;