const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb+srv://ashokzarmariya:Ashok90233@cluster0.v5kei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = { connect };

//mongodb+srv://ashokzarmariya:Ashok90233@cluster0.v5kei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//mongodb+srv://ashokzarmariya:<password>@cluster0.v5kei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



 