const url = "mongodb://localhost:27017/config";
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url,
    (err, db) => {
        if(err) throw err;
        console.log("Connect to Database");
        console.log("db object points to the database : " + db.databaseName);
        db.dropDatabase((err, result) => {
            console.log("Error : " + err);
            if(err) throw err;
            console.log("Operation Success ? " + result);
            db.close();
        })
    }
)