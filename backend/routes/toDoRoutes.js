const express = require('express');
const router = express.Router();
const ToDo = require('../models/toDo');

router.get('/', async(req, res) => {
    try{
        const todos = await ToDo.find();
        res.json(todos);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async(req, res) => {
    try{
        const todo = await ToDo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message: 'ToDo not found'});
        }
        res.json(todo);
    }catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/', async(req, res) => {
    const todo = new ToDo({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const newToDo = await todo.save();
        res.status(201).json(newToDo);
    }catch(err){
        res.status(400).json({ message: 'Bad request' });
    }
}
);

router.put('/:id', async(req, res) => {
    try{
        const todo = await ToDo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message: 'ToDo not found'});
        }
        todo.title = req.body.title;
        todo.description = req.body.description;

        const updatedToDo = await todo.save();
        res.json(updatedToDo);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}
);

router.delete('/:id', async(req, res) => {
    try{
        const todo = await ToDo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message: 'ToDo not found'});
        }
        await todo.remove();
        res.json({ message: 'ToDo removed' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}
);

module.exports = router;
