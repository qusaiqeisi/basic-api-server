
'use strict';

const POSTGRES_URI = process.env.NODE_URL='test' ?'sqlite:memory':"postgres://localhost:5432/qusaiqeisi"
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');

let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);


// const animal = require('./animal.models')
// lets define our Schema
module.exports = {
    db: sequelize,
    food: food(sequelize, DataTypes),
}