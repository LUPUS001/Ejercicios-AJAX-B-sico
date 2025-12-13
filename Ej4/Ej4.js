var objeto = new XMLHttpRequest();

function sacardatos(datos, idDiv){
    var lugar = document.getElementById(idDiv);
    
    // 1. Abrir la conexión.
    objeto.open("GET", datos, true); // Añadimos 'true' para asegurar que es asíncrono
    
    objeto.onreadystatechange = function(){
        // 2. Verificar estado: 4 (completo) y 200 (OK).
        if (objeto.readyState == 4 && objeto.status == 200) {
            
            // --- INICIO del Procesamiento XML ---
            var xmlDoc = objeto.responseXML;
            var animales = xmlDoc.getElementsByTagName("animal"); // Obtener todos los nodos <animal>
            
            var salidaHTML = "";
            
            // Recorrer cada <animal>
            for (var i = 0; i < animales.length; i++) {
                
                var especies = animales[i].getElementsByTagName("especie"); // Obtener las especies dentro del animal actual
                
                //No es necesario, pero queda bonito: 
                    // salidaHTML += "<h2>Animal " + (i + 1) + "</h2>";
                
                // Recorrer las <especie> dentro del animal
                for (var j = 0; j < especies.length; j++) {
                    // Extraer el texto dentro de la etiqueta <especie>
                    salidaHTML += "- " + especies[j].textContent + "<br>"; 
                }
            }
            
            // --- FIN del Procesamiento XML ---

            lugar.innerHTML = salidaHTML; // Mostrar el resultado procesado
        } 
    }
    
    // 3. Enviar la petición.
    objeto.send(null);
}