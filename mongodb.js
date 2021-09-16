const { MongoClient, ObjectID } = require('mongodb')

const connecttionURL = process.env.MONGO_URL

const databaseName = 'hook-tester'

MongoClient.connect(connecttionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        console.log("Error")
        return console.log(error);
    }
    const db = client.db(databaseName);

})