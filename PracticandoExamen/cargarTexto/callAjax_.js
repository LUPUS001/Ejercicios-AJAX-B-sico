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
