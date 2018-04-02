const url = "mongodb://localhost:27017";
const MogoClient = require('mongodb').MongoClient;

MogoClient.connect(url,
    (err, db) => {
        if(err) throw err;
        console.log("Connected to MongoDB");
        db.close();
    }
);
