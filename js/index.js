let escalados = 0;
document.getElementById('escalados').innerText = escalados;

function escalar() {
    let nome = document.getElementById('nome').value;
    let posicao = document.getElementById('posicao').value;
    let numero = document.getElementById('numero').value;

    if (nome && posicao && numero) {
        if (escalados <= 10) {
            const ul = document.getElementById('time');

            const novaLi = document.createElement('li');
            novaLi.innerText = `Jogador: Nome: ${nome} | Posição: ${posicao} | Numero: ${numero}`;

            ul.appendChild(novaLi);

            document.getElementById('nome').value = '';
            document.getElementById('posicao').value = '';
            document.getElementById('numero').value = '';
            escalados = escalados + 1;
            document.getElementById('escalados').innerText = escalados;
        }else{
            alert('Foi atingido o numero máximo de jogadores!');
        }


    } else {
        alert('Por favor, preencha todos os campos para escalar o jogador.');
    }
}

function removerJogador() {
    let numero = document.getElementById('remover').value;
    let jogadores = document.getElementsByTagName('li');

    Array.from(jogadores).forEach(jogador => {
        let jogadorNumero = jogador.innerText.match(/Numero: (\d+)/)[1];
        if (jogadorNumero === numero) {
            jogador.remove();
            escalados = escalados - 1;
            document.getElementById('escalados').innerText = escalados;
        }
    });
}
