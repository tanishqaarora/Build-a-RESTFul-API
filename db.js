const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

const db = mongoose.connect(url)

.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log("Error in connection: ", err);
})

module.exports = db;