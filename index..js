const express = require('express')
const path= require('path')


const api= require('./routes/api')
const app = express()
const PORT = 3000



app.use(api)
app.use(express.static(path.join(__dirname,'public')))

app.listen(PORT, ()=>{
    console.log("serving running on port ",PORT)
})