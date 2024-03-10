var body = document.querySelector("body");
var icon = document.getElementsByClassName("bi");
var texto = document.getElementsByClassName("texto");
var card = document.getElementsByClassName("card-body")

document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle");

    document.addEventListener("mousemove", function (e) {
        // Obtén las coordenadas del ratón ajustadas por el desplazamiento de la página
        const mouseX = e.clientX;
        const mouseY = e.clientY + window.scrollY;

        // Actualiza la posición del círculo
        circle.style.left = mouseX + "px";
        circle.style.top = mouseY + "px";
    });
});

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "chau");
    document.querySelector("#dl-icon").setAttribute("class", "bi-sun-fill");

    body.style.background = 'linear-gradient(0deg, rgba(11,56,56,1) 15%, rgba(101,71,7,1) 100%)';

    for (var i = 0; i < icon.length; i++) {
        icon[i].style.color = 'white';
    }

    for (var i = 0; i < texto.length; i++) {
        texto[i].style.color = 'white';
    }

    for (var i = 0; i < card.length; i++) {
        card[i].style.backgroundColor = '#000000';
    }
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "hola");
    document.querySelector("#dl-icon").setAttribute("class", "bi-moon-stars-fill");

    body.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';

    for (var i = 0; i < icon.length; i++) {
        icon[i].style.color = 'black';
    }

    for (var i = 0; i < texto.length; i++) {
        texto[i].style.color = 'black';
    }

    for (var i = 0; i < card.length; i++) {
        card[i].style.backgroundColor = '#ffffff';
    }
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "hola"?
    temaOscuro(): temaClaro();
}