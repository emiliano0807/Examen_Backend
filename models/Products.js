const { EntitySchema } = require("typeorm");


const Alumno = new EntitySchema({
    name: "Alumno",
    tableName:"alumnos",
    columns:{
        matricula:{
            primary: true,
            type:"int",
            generated: true,
        },
        nombre:{
            type:"varchar",
            length:255,
        },
        sexo:{
            type:"varchar",
            length:255,
        },
        apellido:{
            type:"varchar",
            length:255,
        },
    }
});

module.exports = {Alumno}