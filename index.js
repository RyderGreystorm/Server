const express= require('express');
const app = express();
const mongoose = require('mongoose')
const usernameModel = require('./controllers/usernameModel');
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

app.use(cors())

app.use(express.json());
app.get('/user', usernameModel.getAllUsers)
app.post('/user', usernameModel.addUser)



const url=process.env.DB_URI
  mongoose.connect( url,{
        useNewUrlParser: true,
        useUnifiedTopology : true,
    }
        )
    .then(function(){
        console.log('Database connected successfully')
    })
    .catch(function(error){
        console.log('Database is not connected...', error.message);
    })
app.listen(9000, function(){
    console.log('Server is running at port 9000.............');
  
})