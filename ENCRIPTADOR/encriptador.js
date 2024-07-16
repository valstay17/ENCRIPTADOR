
let texto = document.getElementById("container_input").value;

 console.log(container_input);
function noAceptados(){
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let texto = document.getElementById("container_input").value;

    if(texto.match(caracteres)){
        alert("No se permiten caracteres especiales")
        return false
    }else{
        return true
    }
}

function encriptador(){
    let texto = document.getElementById('container_input').value;

    texto = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat")
        .replace(/a/gi, "ai");
    
        texto;
    

    document.getElementsByClassName('encriptar_boton').value=texto;
    return document.getElementById('textoo').innerHTML=texto;

}

function desencriptar(){

    let texto = document.getElementById('container_input').value;

    texto = texto
        .replace(/ai/gi,"a")
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");

        texto;
    
    document.getElementById('desencriptar_boton').value=texto;
    
    return document.getElementById('textoo').innerHTML=texto;

      
}