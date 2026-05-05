function escolher(presente) {

    let escolhidos = JSON.parse(localStorage.getItem("presentesUsados")) || [];

    if (escolhidos.includes(presente)) {
        alert("Esse presente já foi escolhido 😢");
        return;

        // salva presente como usado
let usados = JSON.parse(localStorage.getItem("presentesUsados")) || [];
usados.push(presente);
localStorage.setItem("presentesUsados", JSON.stringify(usados));

    }

    // salva escolha atual
    localStorage.setItem("presenteEscolhido", presente);
    escolhidos.push(presente);
    localStorage.setItem("presentesUsados", JSON.stringify(escolhidos));

    document.getElementById("mensagem").innerText =
        "Você escolheu: " + presente + " 🎉";
}

function confirmarPresenca(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    let presente = localStorage.getItem("presenteEscolhido");

    if (!nome || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!presente) {
        alert("Escolha um presente primeiro!");
        return;
    }

    // lista de confirmações
    let lista = JSON.parse(localStorage.getItem("confirmacoes")) || [];

    // adiciona nova confirmação
    lista.push({
        nome: nome,
        email: email,
        presente: presente
    });

    localStorage.setItem("confirmacoes", JSON.stringify(lista));

    document.getElementById("resposta").innerText =
        "Presença confirmada, " + nome + "! 🎉";
}
