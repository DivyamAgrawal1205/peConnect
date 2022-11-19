const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://pecConnect:<DefXyz>@pecconnect.mc4z4fg.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
    console.log("database connection error " + err);
        })
    }
}

module.exports = new Database();