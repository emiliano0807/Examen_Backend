
const ProductRoutes = require("./routes/products.routes"); 
const { AppDataSource } = require("./data/source");
const express = require("express")
const cors = require("cors");
const PORT = 3000;


const app = express();


//Middlewares
app.use(express.json());
app.use(cors());


//Rutas
app.use("/api/v1",ProductRoutes);


AppDataSource.initialize().then(
  ()=>{
    console.log("Conectado a la base de datos");
      app.listen(PORT,()=>console.log("servidor corriendo en http://localhost:"+PORT));
  }
).catch((err)=>{
  console.log("Error al conectar a la base de datos");
  console.error(err);
})




