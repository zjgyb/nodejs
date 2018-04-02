const url = "mongodb://localhost:27017/newdb";
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url,
    (err, db) => {
        if(err) throw err;
        console.log('Database created!');
        // 没有成功显示newdb
        console.log("db object points to the database: " + db.databaseName);
        db.close();
    }
);
