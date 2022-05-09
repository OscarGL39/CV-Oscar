var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(idioma) {


    if (idioma == "es") {
        location.href = "./es/index.html"
    } else {
        location.href = "../index.html";
    }
}


function Porcentaje(idioma) {
    var total = document.getElementById('Lenguaje').value
    var parrafo = document.getElementById('resultado')
    if (total == "JavaScript") {
        var resultado = '40%'
    } else if (total == "CSS") {
        var resultado = '75%'
    } else {
        var resultado = '80%'
    }
    if (idioma == "en") {
        parrafo.innerHTML = 'I have learned to use this language about a ' + resultado
    } else {
        parrafo.innerHTML = 'He aprendido a usar este lenguaje aproximadamente un ' + resultado
    }
}