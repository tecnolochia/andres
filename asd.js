let palabras=["manzana", "banana","cereza","durazno" ];
let ultimaPalabra = palabras[palabras.length - 1];
//conssole.log(ultimaPalabra);
palabras.forEach(element => {
    element="la "+element
    console.log(element)
});
console.log(palabras)