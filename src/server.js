'use strict';

const express = require('express');

const notFoundHandler = require('./handlers/404');

const errorHandler = require('./handlers/500');

const logger = require('./middlewares/logger');

const personRoutes = require('./routes/person');

const app=express();

app.use(express.json());

app.use(logger);

app.use(personRoutes);

let start=(port)=>{
    app.listen(port,()=>console.log(`listing to port :${port}`))
}

app.get('/',(req,res)=>{
    res.send('qusai and sultan fucked up ')
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}