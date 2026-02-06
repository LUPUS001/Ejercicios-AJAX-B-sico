//Enunciado
/*Debes crear una pagina para una agencia de viajes que nos muestre una
imagen, un texto que se encuentra en un fichero que estara almacenado en
un servidor web y que se cargara asincronamente cada vez que se ejecute
la pagina y un boton.
    -Al pasar el raton por encima de la imagen utilizando los efectos de
    fundido se convertira en transparente y volvera a aparecer.
    -Cuando pinches sobre el boton "Cambiar color fondo" se ejecutara
    un plugin que habras creado para darle un color de fondo al parrafo
    del punto anterior.
    -No puedes utilizar en esta parte los metodos de ajax en jquery. Hay
    que implementarlo segun lo visto en el bloque 2. */

document.addEventListener("DOMContentLoaded", createContent);

function createContent(){
    loadText();
    loadImg();
}

function loadText(){
    
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open("GET", "text.txt");
    ajaxObj.onload = function(){

        if(ajaxObj.readyState === 4 && ajaxObj.status === 200){
        
            var divP = document.getElementById("textContainer");
            var paragraph = document.createElement("p");
            paragraph.classList.add("ajaxParagraph");
            paragraph.textContent = ajaxObj.responseText;

            divP.appendChild(paragraph);
        }
    };
    ajaxObj.send();
}

function loadImg(){
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open("GET" , "viajes.jpg");
    ajaxObj.responseType = "blob";
    ajaxObj.onload = function() {

        if (ajaxObj.readyState === 4 && ajaxObj.status === 200){
            var imgURL = URL.createObjectURL(ajaxObj.response);

            var divImg = document.getElementById("imgContainer");
            var img = document.createElement("img");
            img.src = imgURL;
            img.alt = "Imagen de viaje";
            img.id = "imgOpacity"; //agregamos id para animacion;

            divImg.appendChild(img);
        }
    };
    ajaxObj.send();
}