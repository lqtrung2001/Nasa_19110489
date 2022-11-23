const http = require('http');
require('dotenv').config();
const {loadPlanetData} = require('./models/planets.model');
const app = require('./app');
const db = require('../config/mongo')

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function starServer(){

    await db.connect();
    await loadPlanetData();
    
    server.listen(PORT, ()=>{
        console.log('Listen on port ' + PORT);
    });
}
starServer();


// app.listeners();


// console.log(PORT);