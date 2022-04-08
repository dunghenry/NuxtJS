const { Router } = require('express')
const router = Router();

const todos = [
    {
        id: 1, 
        title: "Công việc 1",
        completed: false
    },
    {
        id: 2, 
        title: "Công việc 2",
        completed: false
    },
    {
        id: 3, 
        title: "Công việc 3",
        completed: false
    }
]
router.get('/', (req, res) => {
    res.status(200).json(todos);
})
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(todo => todo.id == id);
    res.status(200).json(todo);
})
module.exports = router;