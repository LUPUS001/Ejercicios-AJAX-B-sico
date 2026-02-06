$(document).ready(function () {
    // Basado en Ej5.html (hover) y 2.html (fadeTo)
    $("#imgRobe").hover(
        function() {
            // Al entrar el ratón: Transparencia (Opacidad 0.2)
            // .stop() evita que se acumulen animaciones si pasas el ratón muchas veces
            $(this).stop().fadeTo("slow", 0.2); 
        }, 
        function() { 
            // Al salir el ratón: Opacidad total (1)
            $(this).stop().fadeTo("slow", 1); 
        }
    );
});