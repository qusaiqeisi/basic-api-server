'use strict';

const express = require('express');

const notFoundHandler = require('./handlers/404');

// const errorHandler = require('./handlers/500');

const logger = require('./middlewares/logger');

const foodRoutes = require('./routes/food');

const app=express();

app.use(express.json());

app.use(logger);

app.use(foodRoutes);

let start=(port)=>{
    app.listen(port,()=>console.log(`listing to port :${port}`))
}

app.get('/',(req,res)=>{
    res.send('qusai and sultan worm up ')
})

app.use('*', notFoundHandler);
// app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}
