const { Sequelize } = require ("sequelize");
const initModels = require ("../models/init-models");
const config = require ("./config");

const sequelize = new Sequelize (
    config.databases,
    config.username,
    config.password,
    config
);

sequelize.authenticate().then(() => {
    console.log("conexion a la base de datos completado");
}).catch(err=> {
    console.error("Error con la conexion a la base de datos",err);
});

let models = initModels(sequelize);
module.exports = { sequelize,models};