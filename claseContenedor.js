const fs = require("fs");

class Contenedor{
    constructor(nameFile){
        this.nameFile = nameFile;
    }
 
    getById = async(id)=>{
        try {
            if(fs.existsSync(this.nameFile)){
                const contenido = await fs.promises.readFile(this.nameFile,"utf8");
                if(contenido){
                    const productos = JSON.parse(contenido);
                    const producto = productos.find(item=>item.id===id);
                    return producto
                } else{
                    return "El archivo esta vacio"
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    getAll = async()=>{
        try {
            const contenido = await fs.promises.readFile(this.nameFile,"utf8");
            const productos = JSON.parse(contenido);
            return productos
        } catch (error) {
            console.log(error)
        }
    }
    
}


module.exports = Contenedor;