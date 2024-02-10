const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unqiue: true
    },
    phone: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        unqiue: true
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;