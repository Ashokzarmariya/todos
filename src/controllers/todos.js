const express = require("express");
const Todos = require("../models/todolist");
const router = express.Router();

router.get("/get", async (req, res) => {
    try {
        const todos = await Todos.find().lean().exec();
        return res.status(200).send(todos);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});  

router.post("/add", async (req, res) => {
    try {
        const todos = await Todos.create(req.body);
        return res.status(201).send(todos);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});




module.exports = router;