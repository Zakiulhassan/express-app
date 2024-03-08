const sequelize = require("../bin/dbConnections")
const USERS = require("./definitions/users");

const models = {
    users: USERS,
}

const db = {}

db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models}