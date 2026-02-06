(function($){ // (A)
    $.fn.cambiarFondo = function() { // (B)
        this.css("background-color", "rgb(237, 166, 44)"); // (C)
        return this; // (D)
    };
})(jQuery);

// Activación
$("#btnColor").click(function(){ // (E)
    $("#textoViaje").cambiarFondo();
});


/* 
    (A) (function($){ ... })(jQuery): Esto se llama Closure o función autoejecutable. Sirve para proteger la variable $ dentro de tu plugin y 
    que no choque con otras librerías. Es la estructura estándar profesional.

    (B) $.fn.nombre: Así es como le dices a jQuery: "Oye, quiero añadir una función nueva a tu librería que se llame cambiarFondo".

    (C) this.css(...): Dentro del plugin, this se refiere al elemento que has seleccionado (en este caso, #textoViaje). Le aplicas el estilo CSS directamente.

    (D) return this: Esto permite encadenar funciones. Ejemplo: $("#div").cambiarFondo().hide(). Si no retornas this, la cadena se rompe.

    (E) Activación: Simplemente detectas el click del botón y llamas a tu nueva función inventada sobre el div del texto.

*/