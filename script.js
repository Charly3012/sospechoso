const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("boton");

function cumple(){

    contenedor.innerHTML = `
        <div class="principal">
            <h2>¡Feliz cumpleaños maestra!</h2>
            <p>Que tenga cumpla muchos añitos más, la queremos mucho</p>
            <img src="ola.gif" alt="">

            <audio src="mananitas.mp3" autoplay>
            </audio>
        </div>
    `;

    boton.disabled = true;
}