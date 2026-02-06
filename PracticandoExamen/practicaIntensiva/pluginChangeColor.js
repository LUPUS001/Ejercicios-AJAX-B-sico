(function($){
    $.fn.changeBackground = function(){
            $(this).on("click", function(){
                $("p").css("background", "rgb(237, 166, 44)");
            });
    };

})(jQuery);

$(document).ready(function () {
    $("#changeColor").changeBackground();
});