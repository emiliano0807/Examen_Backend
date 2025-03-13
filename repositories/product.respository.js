const { AppDataSource } = require("../data/source");
const { Alumno } = require("../models/Products");



const ProductRepository = 
AppDataSource.getRepository(Alumno);


module.exports = {ProductRepository}