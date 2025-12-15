/* VERSIÓN 1 */
function enviarSaludo() {
    var objeto = new XMLHttpRequest();
    var lugar = document.getElementById("resultado");

    // 1. Recoger valores
    var nom = document.getElementById("cajaNombre").value;
    var ape = document.getElementById("cajaApellido").value;

    // 2. Preparar los datos (formato clave=valor&clave=valor)
    var datosAEnviar = "nombre=" + encodeURIComponent(nom) + "&apellido=" + encodeURIComponent(ape);

    objeto.open("POST", "saludo.php", true);

    // 3. Cabecera OBLIGATORIA para POST
    objeto.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    objeto.onreadystatechange = function() {
        if (objeto.readyState == 4 && objeto.status == 200) {
            lugar.innerHTML = objeto.responseText;
        }
    }

    // 4. Enviamos la variable con los datos dentro del send
    objeto.send(datosAEnviar);
}

/* VERSIÓN 2 */
/* function enviarSaludo() {
    var objeto = new XMLHttpRequest();
    var divResultado = document.getElementById("resultado");

    // 1. Recogemos los valores de los inputs
    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("apellido").value;

    // 2. Preparamos la cadena de datos a enviar (query string)
    // Es buena práctica usar encodeURIComponent por si hay espacios o acentos [cite: 8222]
    var datosEnviar = "nombre=" + encodeURIComponent(nom) + "&apellido=" + encodeURIComponent(ape);

    // 3. Abrimos la conexión
    objeto.open("POST", "saludo.php", true);

    // 4. ESTABLECEMOS LA CABECERA (Obligatorio para enviar parámetros por POST) [cite: 8212]
    objeto.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // 5. Gestión de la respuesta
    objeto.onreadystatechange = function() {
        if (objeto.readyState == 4) {
            if (objeto.status == 200) {
                divResultado.innerHTML = objeto.responseText;
            } else {
                divResultado.innerHTML = "Error en la petición: " + objeto.status;
            }
        }
    }

    // 6. Enviamos los datos dentro del send [cite: 8213]
    objeto.send(datosEnviar);
} */