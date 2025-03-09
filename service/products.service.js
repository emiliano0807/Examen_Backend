const {ProductRepository} = require("../repositories/product.respository");

class ProductService{
    async getAll(){
        return await ProductRepository.find();
    }

    async getOneBy(matricula){
        return await ProductRepository.findOneBy({
            matricula
        });
    }

    async create(Alumno){
        const newAlumno = ProductRepository.create(Alumno);
        return await ProductRepository.save(newAlumno);
    }

    async update(matricula,data){
        console.log({matricula,data});2
        await ProductRepository.update(matricula,data);
        return await ProductRepository.findOneBy({matricula});
    }

    async delete(matricula){
        return await ProductRepository.delete({matricula});
    }


}

module.exports ={ProductService: new ProductService()};