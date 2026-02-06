window.onload = function() {
    // 1. Crear objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();
    
    // 2. Abrir conexión al fichero de texto
    xhr.open("GET", "archivo.txt");
    
    // 3. Verificar estado y cargar
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Pegamos el texto dentro del div
            document.getElementById("textoViaje").innerHTML = xhr.responseText;
        }
    };
    
    // 4. Enviar petición
    xhr.send();
};