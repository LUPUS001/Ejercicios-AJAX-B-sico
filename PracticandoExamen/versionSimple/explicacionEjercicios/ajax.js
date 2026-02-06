// Este archivo es el encargado de ir al servidor, buscar el texto y traerlo a la página sin usar jQuery (requisito estricto del examen).

window.onload = function() { // (A)
    let xhr = new XMLHttpRequest(); // (B)
    
    xhr.open("GET", "viajes.txt"); // (C)
    
    xhr.onreadystatechange = function() { // (D)
        if (xhr.readyState == 4 && xhr.status == 200) { // (E)
            document.getElementById("textoViaje").innerHTML = xhr.responseText; // (F)
        }
    };
    
    xhr.send(); // (G)
};

/* 
    (A) window.onload: Le dice al navegador: "No hagas nada hasta que toda la página (HTML, imágenes, scripts) esté cargada". Es una medida de seguridad para no intentar buscar elementos que aún no existen.

    (B) new XMLHttpRequest(): Aquí creas al "mensajero". Es el objeto nativo de JavaScript que permite hacer peticiones al servidor (AJAX) sin recargar la página.

    (C) .open(...): Configuras al mensajero.

    -  "GET": Tipo de petición (pedir datos).
    -  "viajes.txt": ¡OJO AQUÍ! Esta es la dirección del archivo. Si este archivo no existe en tu carpeta, el mensajero vuelve con las manos vacías (por eso te salía el cuadro vacío en la imagen).

    (D) .onreadystatechange: Es como decirle al mensajero: "Avísame cada vez que cambies de estado" (mientras viaja, cuando llega, cuando vuelve).

    (E) readyState == 4 && status == 200: La condición del éxito.

    -  4: Significa "He terminado la operación".
    -  200: Significa "Todo ha ido bien" (si fuera 404, sería "No encontrado").

    (F) .innerHTML = xhr.responseText: Aquí ocurre la magia. Coges lo que trajo el mensajero (responseText) y lo inyectas dentro de la caja <div> de tu HTML.

    (G) .send(): ¡Disparo! Hasta que no ejecutas esta línea, el mensajero no sale.
*/