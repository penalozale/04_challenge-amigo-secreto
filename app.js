// Autor: Leandro Peñaloza
// Fecha: 2025-02-08
// Descripción: Challenge Amigo Secreto

let amigosLista = [];

 // Agregamos un evento al campo de entrada para que se ejecute 
 // la función agregarAmigo() al presionar la tecla Enter
let inputAmigo = document.getElementById('amigo');
inputAmigo.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});


function agregarAmigo(){
    // Obtenemos el valor del campo de entrada
    let amigo = document.getElementById('amigo').value;
    // Validamos que el campo no esté vacío
    if (amigo === ''){
        //alert('Por favor, inserte un nombre.');
        // Mostrar dicha alerta en HTML
        document.getElementById('resultado').innerHTML = 'Por favor, inserte un nombre.';
    } else {
        // Agregamos el amigo a la lista
        amigosLista.push(amigo);
        // Limpiamos el campo de entrada
        document.getElementById('amigo').value = '';
        // Limpiamos la alerta si existe
        document.getElementById('resultado').innerHTML = '';
    }
    console.log(amigosLista);
    mostrarAmigos();
}

function mostrarAmigos(){
    // Obtenemos el elemento de la lista, donde se mostrarán los amigos
    let listaElement = document.getElementById('listaAmigos');
    // Limpiamos la lista antes de agregar nuevos elementos
    listaElement.innerHTML = '';
    // Recorremos la lista de amigos y se muestran los nombres en una lista visible en la página:
    for (let i = 0; i < amigosLista.length; i++){
        // Creamos un elemento de lista
        let amigo = document.createElement('li');
        // Asignamos el nombre del amigo
        amigo.textContent = amigosLista[i];
        // Agregamos el amigo a la lista
        listaElement.appendChild(amigo);
    }
}

function sortearAmigo(){
    // Validamos que la lista de amigos no esté vacía
    if (amigosLista != []) {
        let indiceRandom = Math.floor(Math.random() * amigosLista.length);
        let amigoSecreto = amigosLista[indiceRandom];
        // Mostrar el resultado en el HTML
        document.getElementById('resultado').innerHTML = 'Tu amigo secreto es: ' + amigoSecreto;
        // Muestra el resultdo en una ventana emergente
        //alert('Tu amigo secreto es: ' + amigoSecreto);
    } else {
        // Mostrar un mensaje de alerta si la lista de amigos está vacía
        document.getElementById('resultado').innerHTML = 'Por favor, agrega amigos antes de sortear.';
        //alert('Por favor, agrega amigos antes de sortear.');  
    }
}
