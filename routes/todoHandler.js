const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema');

const Todo = new mongoose.model('Todo', todoSchema);




//routes

//GET ALL TODO

router.get('/', async(req, res) => {
    res.send({message: 'hello world'})

})

//GET TODO BY ID

router.get('/:id', async(req, res) => {

});

//POST A TODO

router.post('/', async(req, res) => {
    

    try{
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(200).json({message: 'todo was inserted successfully'})

    }catch(error){
        res.status(500).json({message: ' there was a serverside error'})
    }
  

});

//POST MULTIPLE TODO

router.post('/all', async(req, res) => {
    try{
        await Todo.insertMany(req.body);
        res.status(200).json({message: 'todos inserted sucessfully'})
    }catch(error){
        res.status(500).json({message: ' there was a serverside error'})
    }
    

})

//UPDATE TODO
router.post('/:id', async(req, res) => {

})

//DELETE TODO
router.delete('/:id', async(req, res) =>{

})

module.exports = router;
