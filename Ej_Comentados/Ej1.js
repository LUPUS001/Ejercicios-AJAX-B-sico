// 1. EL MENSAJERO (Global)
// Creamos el objeto XMLHttpRequest. Es el vehículo que viajará al servidor.
// Al estar fuera de la función, se crea una vez y se reutiliza.
var objeto = new XMLHttpRequest;

function sacardatos(datos, idDiv){
    
    // 2. EL DESTINO
    // Localizamos la caja HTML (el div) donde pegaremos el texto cuando llegue.
    // Usamos la variable 'idDiv' que recibimos del HTML ('contenedor').
    var lugar = document.getElementById(idDiv);

    // 3. CONFIGURAR EL VIAJE (El GPS)
    // .open(METODO, URL)
    // "GET": Vamos a leer información.
    // datos: El nombre del archivo ('Ej1.txt').
    // Nota: Aún no sale, solo se está preparando.
    objeto.open("GET", datos);

    // 4. EL DETECTOR DE CAMBIOS (El Oído)
    // Como el viaje tarda, le decimos: "Avísame cuando cambie tu estado".
    // Esta función se ejecutará varias veces, cada vez que avance el proceso.
    objeto.onreadystatechange = function(){

        // readyState == 4: ¡Ya he vuelto y he terminado!
        // status == 200: ¡Todo ha ido bien! (No hubo error 404 ni 500)
        if (objeto.readyState == 4 && objeto.status == 200) {
            
            // 5. LA ENTREGA
            // objeto.responseText: Es lo que trae el mensajero (el texto del archivo).
            // lugar.innerHTML: Lo metemos dentro del div, borrando lo que había antes.
            lugar.innerHTML = objeto.responseText;
        }
    }

    // 6. EL DISPARADOR (¡Arranca!)
    // .send(): Aquí es cuando el mensajero sale realmente hacia el servidor.
    // null: No enviamos datos de ida (porque es un GET).
    objeto.send(null);
}