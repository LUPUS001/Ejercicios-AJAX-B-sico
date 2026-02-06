$(document).ready(function () {
    $("#imgOpacity").hover( // (A)
        function() {
            // (B) Entra el ratón
            $(this).stop().fadeTo(500, 0.2); 
        }, 
        function() { 
            // (C) Sale el ratón
            $(this).stop().fadeTo(500, 1.0); 
        }
    );
});

/* 
    (A) .hover(funcEntrar, funcSalir): Es un método especial de jQuery que acepta dos funciones: qué hacer cuando entras y qué hacer cuando sales.

    (B) fadeTo(velocidad, opacidad):

    -  Usamos fadeTo y no fadeOut porque fadeOut hace que la imagen desaparezca del todo y los elementos de abajo suban de golpe. fadeTo la deja "fantasmal" pero ocupando su sitio.
    -  0.2: Significa al 20% de visibilidad (casi transparente).

    (C) .stop(): Esto es vital. Si pasas el ratón muy rápido 10 veces por encima, sin el stop(), la imagen se quedaría parpadeando 10 veces como loca (se crea una cola de animaciones). 
    stop() dice: "Cancela lo que estabas haciendo y haz esto nuevo AHORA".
*/