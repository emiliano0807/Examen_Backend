const {Alumno} = require("../models/Products");
const { DataSource } = require("typeorm");
require("reflect-metadata");



const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    port:3307,
    username:"emiliano",
    password:"1234",
    database:"Alumnos",
    entities:[Alumno],
});



module.exports = {AppDataSource}