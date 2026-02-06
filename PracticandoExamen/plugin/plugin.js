(function($){
    // ADAPTACIÓN: Cambiamos 'resaltar' por 'cambiarFondo'
    $.fn.cambiarFondo = function() {
        // Recorremos los elementos seleccionados
        this.each(function(){
            // ADAPTACIÓN: Cambiamos 'border' por 'background-color'
            $(this).css({
                "background-color": "rgb(237, 166, 44)", // El color naranja/amarillo
                "padding": "10px",      // Opcional: queda mejor visualmente
                "transition": "0.5s"    // Opcional: suaviza el cambio
            });
        });
        return this; // Para permitir encadenamiento
    };
})(jQuery);