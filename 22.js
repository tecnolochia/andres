class persona{
     constructor(nombre,edad){
     this.nombre=nombre
             this.edad=edad
        
     }
     presentarse(){
        console.log("mi nombre es",this.nombre)
     }
}
let andres = new persona("Andres",16)  
andres.presentarse()   
