// CONTADOR

document.addEventListener("DOMContentLoaded", () => {

    const contador = document.getElementById("contador");
    const dataCasamento = new Date("2026-05-03T14:00:00");

    function atualizarContador() {
        const agora = new Date();
        const distancia = dataCasamento - agora;

        if (distancia < 0) {
            contador.innerHTML = "Chegou o grande dia! ❤️";
            return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((distancia / (1000 * 60)) % 60);

        contador.innerHTML = `${dias} dias, ${horas}h ${minutos}m`;
    }

    atualizarContador();
    setInterval(atualizarContador, 1000);

    // MÚSICA
    const musica = document.getElementById("musica");
    const btnMusica = document.getElementById("btnMusica");

    btnMusica.addEventListener("click", () => {
        if (musica.paused) {
            musica.play().then(() => {
                btnMusica.textContent = "⏸ Pausar música";
            }).catch(() => {
                alert("Clique novamente para ativar o som");
            });
        } else {
            musica.pause();
            btnMusica.textContent = "🎵 Tocar música";
        }
    });

});


// ENVIAR FOTOS
function abrirEnvio() {
    window.open("https://drive.google.com/drive/folders/1l83xXIDHcTtZKi_vA7yqyw8pQB5l67nv", "_blank");
}