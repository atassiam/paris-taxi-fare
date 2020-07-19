var request = require('request');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbAmmar:qq6krAWz0anw7Ic0@cluster0.c0wbp.mongodb.net/taxis-fleet?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

var rides = {
    find: function(req, res, next) {
        MongoClient.connect(uri, function(error, client) {
            if (error) throw error;
    
            var db = client.db('taxis-fleet');
            db.collection("rides").find().toArray(function (error, results) {
                if (error) throw error;
                console.log(results);
                res.send(results);

                client.close();
            });
        });
    }
};

module.exports = rides;