// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ingresarNombre = document.getElementById("amigo");
let botonAñadir = document.getElementById("button-add");
let listaPersonas = document.getElementById("listaAmigos");
let botonSortear = document.getElementById("button-draw");
let botonMostrar = document.getElementById("button-show");
let resultado = document.getElementById("resultado");

//crear un array vacio para almacenar los nombres

let amigos = [];
console.log(amigos);

//crear una función que reciba un nombre y lo agregue al array

function agregarAmigo() {

if(ingresarNombre.value.trim() === "") {

alert("Por favor ingresa un nombre válido.");
return;
}

    let nombre = ingresarNombre.value.trim();
    if (nombre !== "") {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaPersonas.appendChild(li);
        ingresarNombre.value = "";
        amigos.push(nombre);
        
        console.log(amigos);

    } else {
    }    
}
//activa el boton sorteo

function sortearAmigo() {
    alert("Sortear amigo...");
   
    // Verificar si hay amigos en la lista antes de sortear

    if (amigos.length > 0) {
        // Sortear un amigo al azar
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        alert(`Amigo sorteado: ${amigoSorteado}`);
    } else {
        alert("No hay amigos en la lista para sortear.");
        return;
       
        //incluir amigos en la 
        
        if (amigos.length > 0) {
            amigos.forEach(function(amigo) {
                let li = document.createElement("li");
                li.textContent = amigo;
                listaPersonas.appendChild(li);
            });
            resultado.textContent = "Lista de amigos mostrada.";
        }

    }
}
botonSortear.disabled = false;
alert("Ya puedes sortear un amigo");

sortearAmigo();
agregarAmigo();
botonAñadir.addEventListener("click", agregarAmigo);
botonSortear.addEventListener("click", sortearAmigo);


function listaAmigos() {
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaPersonas.appendChild(li);

}
}

