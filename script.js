var vector = [];

function constructorObjeto(nombre,color,peso){
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
}

var objeto0 = new constructorObjeto("Remera","Rojo","0.25kg");
vector.push(objeto0);
var objeto1 = new constructorObjeto("Pelota","Blanco","0.45kg");
vector.push(objeto1);
var objeto2 = new constructorObjeto("Celular","Negro","0.2kg");
vector.push(objeto2);


function capturar () {
    console.log("asdad");
    let nombre = document.getElementById("nombre").value;
    let colorTemp = document.getElementById("color").value;
    let peso = document.getElementById("peso").value;
    Add(nombre,colorTemp,peso)
}

function Add(nombre,colorTemp,peso){
    let name = nombre;
    let color = colorTemp;
    let weight = peso;
    let tempObject = new constructorObjeto(name,color,weight);
    vector.push(tempObject);
    let caja = document.createElement("div");
    let contenido = `<h1> ${name}</h1><h2>${color}</h2><h3>${weight}</h3><h1>--------------------------</h1>`;
    caja.innerHTML = contenido;
    document.body.appendChild(caja);
}



    
    


