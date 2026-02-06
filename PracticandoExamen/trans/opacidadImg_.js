
/*Al pasar el raton por encima de la imagen utilizando los efectos de
fundido se convertira en transparente y volvera a aparecer */

$(document).ready(function () {
    
    $(document).on("mouseenter", "#imgOpacity", function(){
        $(this).stop(true, true).animate(
            {opacity: 0.2}, 500);
    });

    $(document).on("mouseleave", "#imgOpacity", function(){
        $(this).stop(true, true).animate(
            {opacity: 1.0}, 500);
    });
});