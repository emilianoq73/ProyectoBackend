const express = require("express");
const Contenedor = require("./claseContenedor.js")

//crear el servidor
const app = express();

const listaProductos = new Contenedor("./productos.txt");



//configurar las rutas
app.get("/", (request, response)=>{
    response.send("<h1 style='color:blue'>Bienvenidos al servidor express</h1>")
})


app.get("/productos", (req,res)=>{
    listaCompleta()
    res.send(`Estos son los articulos`)
})

app.get("/productoRandom", (req,res)=>{
    buscaId()
    res.send("Este es el objeto filtrado")
})

//levantar el servidor
app.listen(8080,()=>{
    console.log("server listening on port 8080")
})

const listaCompleta = async() =>{
    const productos = await listaProductos.getAll();
    console.log(productos);
}
const buscaId = async() =>{
    const cantProd = productos.length();
    const numeroAleatorio = parseInt(Math.random()*cantProd);
    const resultadoId = await listaProductos.getById(numeroAleatorio);
    console.log(resultadoId)
}