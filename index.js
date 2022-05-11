const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); 
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const todoHandler = require('./routes/todoHandler');

//middleware
app.use(express.json());
app.use(cors());

//connect db 
mongoose.connect(`${process.env.MONGOOSE_DB}`,)
.then(()=>{
    console.log('connected')
})
.catch(err =>{
    console.log(err)
})

//ROUTES

app.use('/todo', todoHandler);
app.get('/', (req, res) =>{
    res.send({message: 'hello world'})
})



//listen
app.listen(port, ()=>{
    console.log('listening on port', port)
})