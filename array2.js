
let chaves = ["kiko","chiquinha", "madruga", "barriga", "florinda","linguiça", "71"]
let tentativasFalhas = [];
function tentativa(){
    let palavra = document.getElementById("password").value;
    if(chaves.indexOf(palavra) != -1){
        window.location.href="about.html";
    }
    else{
        alert("vc errou!")
        tentativasFalhas.push(palavra);
        document.getElementById("lista").innerHTML = tentativasFalhas;
        document.getElementById("password").value = null;
    }
}
function voltar(){
    window.location.href="index.html";

}