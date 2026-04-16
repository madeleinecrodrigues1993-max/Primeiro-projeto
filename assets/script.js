// CONTADOR
const dataCasamento = new Date("May 3, 2026 14:00:00").getTime();
const contador = document.getElementById("contador");

setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataCasamento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    contador.innerHTML = `${dias} dias, ${horas}h ${minutos}m`;
}, 1000);

// MÚSICA
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        btnMusica.textContent = "⏸ Pausar música";
    } else {
        musica.pause();
        btnMusica.textContent = "🎵 Tocar música";
    }
});

// PIX DINÂMICO
function copiarPix() {
    const chave = "+5511943095976"; // coloque sua chave real
    navigator.clipboard.writeText(chave);
    alert("Chave Pix copiada! ❤️");
}

// CONFIRMAÇÃO COM SALVAMENTO
const form = document.getElementById("formConfirmacao");
const lista = document.getElementById("lista");

function carregarLista() {
    const dados = JSON.parse(localStorage.getItem("confirmacoes")) || [];
    lista.innerHTML = "";

    dados.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - ${item.convidados} pessoa(s)`;
        lista.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const convidados = document.getElementById("convidados").value;

    const dados = JSON.parse(localStorage.getItem("confirmacoes")) || [];

    dados.push({ nome, convidados });

    localStorage.setItem("confirmacoes", JSON.stringify(dados));

    carregarLista();
    form.reset();
});

carregarLista();