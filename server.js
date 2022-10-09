const express = require("express");
//const Contenedor = require("./claseContenedor.js")
const productsRouter = require("./routes/products")
//crear el servidor
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response)=>{
    response.send("<h1 style='color:blue'>Bienvenidos al servidor express</h1>")
})
/* const listaProductos = new Contenedor("./productos.txt");

app.get("/", (request, response)=>{
    response.send("<h1 style='color:blue'>Bienvenidos al servidor express</h1>")
})


app.get("/productos", async(req,res)=>{
    const productos = await listaProductos.getAll();
    const totalProductos = JSON.stringify(productos);
    res.send(`Estos son los articulos: ${totalProductos}`)
})

app.get("/productoRandom", async(req,res)=>{
    const productos = await listaProductos.getAll();
    const numeroAleatorio = parseInt(Math.random() * (productos.length - 0) + 1);
    const resultadoId = await listaProductos.getById(numeroAleatorio);
    const resultado = JSON.stringify(resultadoId);
    res.send(`Este es el articulo buscado con ramdomId: ${resultado}`)
}) */


app.listen(8080,()=>{
    console.log("server listening on port 8080")
})

app.use("/api/productos", productsRouter)