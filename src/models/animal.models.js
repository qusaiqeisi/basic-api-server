'use strict';

const animal = (sequalize, DataTypes) => {
    sequalize.define('animal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        family: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        }
    });
}

module.exports = animal;