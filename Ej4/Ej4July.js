var objeto = new XMLHttpRequest();

function sacardatos() {
    objeto.open("GET", "x.xml", true);
    objeto.onreadystatechange = function() {
        
        if (objeto.readyState == 4 && objeto.status == 200) {
            
            var lugar = document.getElementById("contenedor");
            var contenido = objeto.responseXML;
            
            var nombre = contenido.getElementsByTagName("nombre")[0].textContent + "<br>";
            var edad = contenido.getElementsByTagName("edad")[0].textContent + "<br>";
            
            lugar.innerHTML = "Nombre: " + nombre + " Edad: " + edad;
        }
    };
    objeto.send(null);
}
