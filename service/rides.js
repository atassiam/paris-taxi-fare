var request = require('request');

const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://dbAmmar:qq6krAWz0anw7Ic0@cluster0.c0wbp.mongodb.net/taxis-fleet?retryWrites=true&w=majority";
const uri = "mongodb://fleet-taxis:QFhc9mcLzUdbYvYTm33nFLMApisF979Fq9YhniCAHeWTxWO0mxVWO4xFIfaaFn0Rj3MJ5FDlDg0HPPxjDb1K6A==@fleet-taxis.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";
const client = new MongoClient(uri, { useNewUrlParser: true });

var rides = {
    find: function(req, res, next) {
        MongoClient.connect(uri, function(error, client) {
            if (error) throw error;
    
            var db = client.db('Rides');
            db.collection("Items").find().toArray(function (error, results) {
                if (error) throw error;
                console.log(results);
                res.send(results);

                client.close();
            });
        });
    }
};

module.exports = rides;