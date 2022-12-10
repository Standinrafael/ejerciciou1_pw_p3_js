function reiniciar() {

    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("imageninicial").src = "../images/pnegro.jpg";
    document.getElementById('textoinicial').style.color = "black";

}

function opciones(elemento) {

    let imagen = document.getElementById("imageninicial");
    let msn = document.getElementById("mensaje");
    let texto = document.getElementById("textoinicial");

    if (elemento.value == "true") {

        texto.style.color = "yellow";
        imagen.src = "../images/pcolor.jpg";
        msn.innerHTML = "Felicitaciones, has seleccionado la opcion correcta";

    } else {

        imagen.src = "../images/pcolor.jpg";
        texto.style.color = "red";
        msn.innerHTML = "Pokemón incorrecto, la respuesta es:excadril";

    }


}