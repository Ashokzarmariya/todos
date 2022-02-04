const  {connect}  = require("./configs/db");
const app = require("./index");

const port = process.env.PORT || 3054;

app.listen(port, async (req, res) => {
    await connect()
    console.log("listing on port 3054");
})  