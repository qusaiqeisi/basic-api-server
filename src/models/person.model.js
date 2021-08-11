'use strict';

const person = (sequalize, DataTypes) => {
    return sequalize.define('person', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        lastName: {
            type: DataTypes.STRING
        }
    });
}

module.exports = person;