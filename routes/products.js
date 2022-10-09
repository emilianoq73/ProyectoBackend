const express = require("express");
const Contenedor = require("../claseContenedor");
const router = express.Router();

const listaProductos = new Contenedor("./productos.txt");


router.get("/", async(req,res)=>{
    const productos = await listaProductos.getAll();
    const totalProductos = JSON.stringify(productos);
    res.json({
        message:"Listado completo de productos",
        response: totalProductos
    })
})

router.get("/:productId", async(req,res)=>{
    const {productId} = req.params;
    const resultadoId = await listaProductos.getById(parseInt(productId));
    const resultado = JSON.stringify(resultadoId);
    res.send(`Este es el articulo buscado con el ID ${productId}: ${resultado}`)
})

// EJEMPLO PRODUCTO PARA POST
/* {
    "title": "Lapiz",
    "price": 100,
    "thumbnail": "https://wrmx00.epimg.net/radio/imagenes/2019/08/23/a_mi_manera/1566571184_134518_1566579117_noticia_normal.jpg",
    "id": 4
  } */

router.post("/",async(req,res)=>{
    const newProduct = req.body;
    const productos = await listaProductos.save(newProduct);
    res.json({
        message:"producto creado",
        response: productos
    })
})

//EJEMPLO ACTUALIZAR PRECIO CON PUT
/* {
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    "id": 2
} */
router.put("/:id", async(req,res)=>{
    const {id} = req.params;
    const newInfo = req.body;
    const productosActualizados = await listaProductos.updateById(parseInt(id),newInfo);
    res.json({
        message:`El producto con el id ${id} fue actualizado`,
        response: productosActualizados
    })
})

router.delete("/:productId", async(req,res)=>{
    const {productId} = req.params;
     await listaProductos.deleteById(parseInt(productId));
     const productos = await listaProductos.getAll();
     const totalProductos = JSON.stringify(productos);
     res.send(`El articulo con el ID ${productId} fue eliminado: ${totalProductos}`)
    
})

module.exports = router;