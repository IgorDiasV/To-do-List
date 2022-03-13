const express = require('express')
const bodyParser = require('body-parser')

const tasks = require('../model/task')
const router = express.Router()

router.get('/all', (req,res) =>
{
    res.json(JSON.stringify(tasks.showTasks()))
})

router.post('/add',bodyParser.json(), (req,res) =>{
    let title = req.body.title

    tasks.addTask(title)
    res.send("add task")

} )

router.post("/remover",bodyParser.json(), (req,res)=>
{
    
    let id = req.body.id
    
    tasks.remover(id)

    res.send('removed task')
})

module.exports = router