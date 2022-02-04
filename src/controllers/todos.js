const express = require("express");
const Todos = require("../models/todolist");
const router = express.Router();

router.get("/get", async (req, res) => {
    try {
        const page = +req.query._page;
        const limit = +req.query._limit;
      
        const offset = (page - 1) * limit;
      
        const posts = await Todos.find({})
          .sort({ createdAt: 'desc' })
          .skip(offset)
          .limit(limit)
          .lean()
          .exec();
      
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

router.post("/delet:id", async (req, res) => {
    try {
        const todos = await Todos.findByIdAndDelete(req.params.id)
        //const todos = await Todos.create(req.body);
        return res.status(201).send(todos);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
});




module.exports = router;