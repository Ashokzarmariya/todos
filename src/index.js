const express = require("express");
const app = express();

app.use(express.json());




const todos = require("./controllers/todos");

app.use("/todos", todos);


module.exports = app;
  
   