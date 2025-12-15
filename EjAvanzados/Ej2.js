/* VERSIÓN 1 */
function sacardatos(datos, idDiv) {
    var objeto = new XMLHttpRequest(); // Creamos el objeto dentro (más seguro)
    var lugar = document.getElementById(idDiv);

    objeto.open("POST", datos, true);

    // OBLIGATORIO EN POST (según manual PDF punto 7.5.1)
    objeto.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    objeto.onreadystatechange = function() {
        if (objeto.readyState == 4 && objeto.status == 200) {
            lugar.innerHTML = objeto.responseText;
        }
    }
    objeto.send(null); // null porque no enviamos parámetros
}
 

/* VERSIÓN 2 */
/* function sacardatos(url, idDiv) {
    // 1. Instanciamos el objeto dentro de la función
    var objeto = new XMLHttpRequest();
    var lugar = document.getElementById(idDiv);

    // 2. Abrimos la conexión (POST, url, asíncrono=true)
    objeto.open("POST", url, true);

    // 3. IMPORTANTE: En POST, debemos establecer la cabecera Content-Type
    // aunque no enviemos datos, es parte del protocolo estándar para formularios.
    objeto.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // 4. Preparamos la respuesta
    objeto.onreadystatechange = function() {
        if (objeto.readyState == 4 && objeto.status == 200) {
            lugar.innerHTML = objeto.responseText;
        }
    }

    // 5. Enviamos la petición (null porque no hay parámetros)
    objeto.send(null);
} */