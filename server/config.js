require('dotenv/config')
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let dbConnection;
let dbConnectionCPR;

module.exports = {
    connectToServer: function(callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return err;
            }

            dbConnection = db.db("crm")
            console.log("Connected to MongoDB")

            return callback;
        })
    }, 
    connectToCPR: function(callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return err;
            }

            dbConnectionCPR = db.db("cpr")
            console.log("Connected to DB CPR")

            return callback;
        }) 
    },
    getDb: function() {
        return dbConnection
    },
    getDbCPR: function() {
        return dbConnectionCPR
    }
}