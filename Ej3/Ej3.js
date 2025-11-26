var objeto = new XMLHttpRequest()
var index = 0
var imagen = document.getElementById("imagen")

function sacardatos(){
    objeto.open("GET", "imagen.txt", true);
    objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            var imagenes = objeto.responseText.trim().split("\n")
            index = (index + 1) % imagenes.length

            imagen.setAttribute("src", imagenes[index])
        }
    }
    objeto.send(null);
}
