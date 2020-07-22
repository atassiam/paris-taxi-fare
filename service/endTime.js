var moment = require('moment');

var endTime = {
    find: function(req, res) {
        var startTime = moment(req.params.time);

        var endTime = moment(startTime).add(req.params.duration, 'seconds');
        console.log("end time : " + endTime);

        //function to convert seconds in hours, minutes and seconds
        function sec2time(timeInSeconds) {
            var pad = function(num, size) { return ('000' + num).slice(size * -1); },
            time = parseFloat(timeInSeconds).toFixed(3),
            hours = Math.floor(time / 60 / 60),
            minutes = Math.floor(time / 60) % 60,
            seconds = Math.floor(time - minutes * 60);
        
            return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
        }

        var duration = sec2time(req.params.duration);
        console.log("duration : " + duration);

        res.send(JSON.stringify({endTime : endTime, duration : duration}));
    }
};

module.exports = endTime;