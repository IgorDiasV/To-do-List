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
    res.send("post adicionado")

} ) 

module.exports = router