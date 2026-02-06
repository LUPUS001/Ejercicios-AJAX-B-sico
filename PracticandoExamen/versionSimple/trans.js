$(document).ready(function () {
    // Usamos hover: primero función entrada, luego función salida
    $("#imgOpacity").hover(
        function() {
            // Ratón entra: se vuelve transparente (opacidad 0.2)
            // .stop() es vital para que no se vuelva loco si pasas el ratón rápido
            $(this).fadeTo(500, 0); 
        }, 
        function() { 
            // Ratón sale: vuelve a verse bien (opacidad 1)
            $(this).fadeTo(500, 1); 
        }
    );
});
