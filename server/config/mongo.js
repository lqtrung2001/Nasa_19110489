const mongoose = require('mongoose')
 require('dotenv').config();


 const URL = process.env.MONGO_URL;

 async function connect(){
    mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
       console.log("Connect to DB")
    })
    .catch((err)=>{
       console.log('err', err)
    })
 }
 module.exports = {connect}
 


