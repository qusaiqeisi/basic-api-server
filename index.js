'use strict';
require('dotenv').config();

const server = require('./src/server');
const port=process.env.PORT
const {db} = require('./src/models/index'); 

db.sync().then(()=> {
    server.start(port);
})
.catch(console.error);