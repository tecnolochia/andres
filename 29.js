class Padre{
    constructor(nombre,apellido){
        this.nombre=nombre
        this.apellido=apellido
    }
}

class Madre{
    constructor(nombre){
        this.nombre=nombre
    }
}
class Hijo{
    constructor(nombre,apellido,año){
        this.madre=new Madre(nombre)
        this.padre=new Padre(nombre,apellido)
        this.año=año
    }
    nombreCompleto(){
        console.log("mi nombre es "+this.madre.nombre+" "+this.padre.apellido)
    }
 }
 let andres = new Hijo("Andres","Cantero","Cuarto")
 andres.nombreCompleto()