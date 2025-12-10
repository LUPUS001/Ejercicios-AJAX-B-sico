var objeto = new XMLHttpRequest()
var imagen = document.getElementById("imagen")

function sacardatos(datos){
    objeto.open("GET", datos);
    objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            imagen.src = objeto.responseText
        }
    }
    objeto.send(null);
}
