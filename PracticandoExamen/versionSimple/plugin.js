(function($){
    // Definimos el plugin 'cambiarFondo'
    $.fn.cambiarFondo = function() {
        // Simplemente cambia el CSS background
        this.css("background-color", "rgb(237, 166, 44)");
        return this;
    };
})(jQuery);

// Activación del botón (Lo pongo aquí para simplificar archivos)
$(document).ready(function(){
    $("#btnColor").click(function(){
        // Al hacer click, aplicamos NUESTRO plugin al texto cargado
        $("#textoViaje").cambiarFondo();
    });
});