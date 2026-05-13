let balotasSacadas = [];

let jugadores = [];

function sacarBalota(){

    let numero = Math.floor(Math.random() * 75) + 1;

    while(balotasSacadas.includes(numero)){
        numero = Math.floor(Math.random() * 75) + 1;
    }

    balotasSacadas.push(numero);

    document.getElementById("balota").innerHTML = numero;

    marcarNumero(numero);
}

function crearJugadores(){

    let cantidad = prompt("¿Cuántos jugadores?");

    let contenedor = document.getElementById("contenedorJugadores");

    contenedor.innerHTML = "";

    jugadores = [];

    for(let i = 0; i < cantidad; i++){

        let nombre = prompt("Nombre del jugador " + (i+1));

        let carton = generarCarton();

        jugadores.push({
            nombre: nombre,
            carton: carton
        });

        crearCartonVisual(nombre, carton);
    }
}

function generarCarton(){

    let numeros = [];

    while(numeros.length < 25){

        let n = Math.floor(Math.random() * 75) + 1;

        if(!numeros.includes(n)){
            numeros.push(n);
        }
    }

    return numeros;
}

function crearCartonVisual(nombre, carton){

    let contenedor = document.getElementById("contenedorJugadores");

    let div = document.createElement("div");

    div.classList.add("carton");

    let html = `
        <h2>${nombre}</h2>

        <table class="tablaCarton">
    `;

    let index = 0;

    for(let i = 0; i < 5; i++){

        html += "<tr>";

        for(let j = 0; j < 5; j++){

            html += `
                <td id="${nombre}-${carton[index]}">
                    ${carton[index]}
                </td>
            `;

            index++;
        }

        html += "</tr>";
    }

    html += "</table>";

    div.innerHTML = html;

    contenedor.appendChild(div);
}

function marcarNumero(numero){

    function marcarNumero(numero){

    jugadores.forEach(jugador => {

        if(jugador.carton.includes(numero)){

            let celda = document.getElementById(
                `${jugador.nombre}-${numero}`
            );

            celda.style.background = "cyan";
            celda.style.color = "black";
        }

        if(verificarGanador(jugador)){

            setTimeout(() => {

                alert("🎉 BINGO 🎉\nGanó " + jugador.nombre);

            }, 300);

        }

    });
}
}
function verificarGanador(jugador){

    let gano = true;

    jugador.carton.forEach(numero => {

        if(!balotasSacadas.includes(numero)){
            gano = false;
        }

    });

    return gano;
}
