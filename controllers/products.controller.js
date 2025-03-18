const { ProductService } = require("../service/products.service")

class ProductController{
    static async getAll(req,res){
        try {
            const alumnos = await ProductService.getAll();
            res.status(200).json(alumnos);
        } catch (error) {
            res.status(500).json({message:error.message || "Ocurrio un error al leer los datos. Intenta de nuevo mas tarde"});
        }
    }
    static async getOneById(req,res){
        try {
            const { matricula } = req.params;
            if (!matricula) {
                return res.status(400).json({ message: "La matricula es requerida es requerido" });
            }
            const alumno = await ProductService.getOneBy(id);
            if (!alumno) {
                return res.status(404).json({ message: "Alumno no encontrado" });
            }
            res.json(alumno);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener al alumno", error });
        }

    }
    static async create(req,res){
        try {
            const body = req.body;
            if (!body.nombre || !body.apellido || !body.sexo){
                return res.status(400).json({ message: "Todos los campos son requeridos" });
            }
            const newAlumno = await ProductService.create(req.body);
            res.status(201).json(newAlumno);
        } catch (error) {
            res.status(500).json({ message: "Error al agregar al alumno", error });
        }

    }
    static async update(req,res){
        try {
            const { matricula } = req.params;
            const body = req.body;
            if (!body.nombre || !body.apellido || !body.sexo && !matricula){
                return res.status(400).json({ message: "se necesita el id y un campo valido para actualizar" });
            }
            const updatedAlumno = await ProductService.update(matricula, req.body);
            if (!updatedAlumno) {
                return res.status(404).json({ message: "Producto no encontrado" });
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({ message: "Error al actualizar el producto", error });
        }
    }
    static async delete(req,res){
        try {
            const { matricula } = req.params;
            if (!matricula){
                return res.status(400).json({ message: "Matricula del alumno requerido" });
            }
            const result = await ProductService.delete(matricula);
            if (result.affected === 0) {
                return res.status(404).json({ message: "Producto no encontrado" });
            }
            res.status(204).json(result);
        } catch (error) {
            res.status(500).json({ message: "Error al eliminar el producto", error });
        }
    }
}

module.exports = {ProductController}