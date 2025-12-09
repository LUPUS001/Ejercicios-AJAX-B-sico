var objeto = new XMLHttpRequest();

function sacardatos(datos, idDiv){
    var lugar = document.getElementById(idDiv);
    
    // 1. Antes de iniciar la carga, ponemos el GIF de espera
    lugar.innerHTML = "<img src='cargando.gif' alt='Cargando...'>";

    objeto.open("GET", datos);
    objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            // 2. Cuando llega la respuesta, sobrescribimos el GIF con el dato real
            lugar.innerHTML = objeto.responseText;
        }
    }
    objeto.send(null);
}