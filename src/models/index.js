
'use strict';

const POSTGRES_URI = "postgres://localhost:5432/qusaiqeisi";
const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);


const person = require('./person.model');
// const animal = require('./animal.models')
// lets define our Schema
module.exports = {
    db: sequelize,
    person: person(sequelize, DataTypes),
    // animal: animal(sequelize, DataTypes)
}