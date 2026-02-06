// CÓDIGO BASADO EN Ej1.js
var objeto = new XMLHttpRequest(); //

function loadText() {
    var lugar = document.getElementById("textoDestino"); // Donde se pintará el texto
    
    // ADAPTACIÓN: Cambia "datos" por el nombre de tu fichero real
    objeto.open("GET", "archivo.txt"); //
    
    objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            // Pintamos el texto del fichero dentro del div
            // lugar.innerHTML = objeto.responseText; 
            
            // TRUCO: Le añadimos una clase para que el plugin lo encuentre luego facil
            lugar.innerHTML = "<p class='ajaxParagraph'>" + objeto.responseText + "</p>";
        }
    }
    objeto.send(null); //
}

// Ejecutamos al cargar la página
window.onload = loadText;