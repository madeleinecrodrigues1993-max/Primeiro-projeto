// ==========================
// CONTADOR REGRESSIVO
// ==========================
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


    // ==========================
    // MÚSICA
    // ==========================
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


// ==========================
// PIX (FUNCIONA EM FILE://)
// ==========================
function copiarPix() {
    const chave = "SEU-PIX-AQUI";

    const input = document.createElement("input");
    input.value = chave;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    alert("Chave Pix copiada! ❤️");
}


document.getElementById("formConfirmacao").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const convidados = document.getElementById("convidados").value;

    const url = "https://docs.google.com/forms/d/e/1FAIpQLSdDmyH0MROtSJbJ2aVuaQLSeeK_djWWbwQAr6wDsWuJMX-vDA/formResponse";

    const formData = new FormData();

    formData.append("entry.1161453060", nome);
    formData.append("entry.917461650", convidados);

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: formData
    });

    alert("Presença confirmada! ❤️");

    document.getElementById("formConfirmacao").reset();
});
