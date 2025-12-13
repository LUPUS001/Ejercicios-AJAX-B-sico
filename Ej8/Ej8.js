var enlace = new XMLHttpRequest();

function sacardatos(url, idDiv) {
    enlace.open("GET", url, true);
    
    enlace.onreadystatechange = function() {
        if (enlace.readyState == 4 && enlace.status == 200) {
            var datos = JSON.parse(enlace.responseText);
            var salida = datos.nombre + "<br>" + datos.duracion;

            document.getElementById(idDiv).innerHTML = salida;
        }
    };
    
    enlace.send(null);
}