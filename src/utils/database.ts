const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db: any;

export const mongoConnect = (callback: any) => {
    MongoClient.connect(
        'mongodb+srv://paulmarkus:7rYMpE8DfwZIVnyz@lotto.0n4qcer.mongodb.net/?retryWrites=true&w=majority&appName=Lotto'
    )
        .then((client: any) => {
            console.log('Connected!');
            _db = client.db();
            callback();
        })
        .catch((err: any) => {
            console.log(err);
        });
};

export const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};
