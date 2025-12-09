// este es el objeto que permite que todo funcione. XMLHtppRequest es una herramienta nativa de los navegadores
var objeto = new XMLHttpRequest
// Analogía: Es como comprar la moto de reparto. La dejas aparcada fuera (variable global) lista para usarse cuando se necesite. Sin esto, no hay viaje al servidor.

function sacardatos(datos, idDiv){
    // datos: Es 'Ej1.txt'. Es la dirección de recogida. ¿Qué tengo que ir a buscar?
    // idDiv: Es 'contenedor'. Es la dirección de entrega. ¿A qué mesa llevo la comida?
    
    /* Localizando el destino */
    var lugar = document.getElementById(idDiv);
    // Explicación: Antes de salir, el código se asegura de saber dónde está la caja verde donde va a poner la información.
    // lugar: Ahora es una variable que "tiene agarrado" al div del HTML.

    /* Preparando el GPS (Configuración) */
    objeto.open("GET", datos);
    // open: No abre la conexión todavía, solo la configura. Es como escribir los datos en el paquete.
    // "GET": El método. Significa "Solo voy a mirar/leer/traer algo". (Si fuéramos a enviar un formulario para guardar, usaríamos "POST").
    // datos: La URL del archivo (Ej1.txt).


    objeto.onreadystatechange = function(){
        // El concepto: Como el viaje al servidor tarda un tiempo (milisegundos o segundos), no podemos quedarnos congelados esperando.
        // onreadystatechange: Le estamos diciendo al mensajero: "Oye, no te voy a esperar despierto. Pero CADA VEZ que te pase algo (cambies de estado), avísame y ejecuta esta función"

        if (objeto.readyState == 4 && objeto.status == 200) {
            // objeto.readyState == 4: Significa "He terminado el viaje". El mensajero ha vuelto.
            /* && objeto.status == 200: Significa "Y todo salió BIEN".
                - Si el archivo no existiera, el status sería 404 (Not Found).
                - Si el servidor explotara, sería 500.
                - 200 es el código universal de "OK".
            */
            lugar.innerHTML = objeto.responseText;
            // objeto.responseText: Es el contenido del archivo de texto que trae el mensajero en la mochila.
            // lugar.innerHTML = ...: Vuelca ese contenido dentro de la caja verde.
            
        }
    }
    objeto.send(null);
    /* 
        Aunque está al final del código, aquí es donde empieza todo realmente.

        Hasta que no se lee esta línea, el mensajero no sale de la tienda.

        null: Se pone null porque en una petición GET no enviamos datos extra (no llevamos paquete de ida, solo vamos a buscar).
    */
}

/* EXPLICACIÓN EXTRA
Si el HTML era el restaurante y el botón era el Jefe de Sala, este código JavaScript es el Repartidor (el Mensajero) que sale con la moto a buscar lo que has pedido.
*/