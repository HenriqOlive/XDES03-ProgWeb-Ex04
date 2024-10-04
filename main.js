/*Atividade 04 - DOM / XDES03
Henrique Pereira de Oliveira - 2020009348*/


//Parte relacionada ao funcionamento dos botões
//Selecionando os botões de ação
const btnJogadorUm = document.querySelector('#jogador1');
const btnJogadorDois = document.querySelector('#jogador2');
const btnReset = document.querySelector('#reset');

//Selecionando os spans dos pontos de cada jogador para realizar mudanças conforme incrementa a pontuação
const spanJog1 = document.querySelector('#spanJog1');
const spanJog2 = document.querySelector('#spanJog2');

//Definindo as variáveis de pontuação de cada jogador
let pontoJogUm = 0;
let pontoJogDois = 0;

//Botão que incrementa a pontuação do jogador 1
btnJogadorUm.addEventListener('click', () => {
    pontoJogUm += 1;
    spanJog1.textContent = `${pontoJogUm}`;
    conferePlacar();
});

//Botão que incrementa a pontuação do jogador 2
btnJogadorDois.addEventListener('click', () => {
    pontoJogDois += 1;
    spanJog2.textContent = `${pontoJogDois}`;
    conferePlacar();
})

//Botão de reset do jogo
btnReset.addEventListener('click', () => {
    pontoJogUm = 0;
    pontoJogDois = 0;
    spanJog1.textContent = `${pontoJogUm}`;
    spanJog2.textContent = `${pontoJogDois}`;
    spanJog1.style.color = 'black';
    spanJog2.style.color = 'black';
    btnJogadorUm.disabled =  false;
    btnJogadorDois.disabled = false;
})





//Parte relacionada ao select e selecionando a pontuação vitoriosa
//Selecionando o select
const selectPontVtrs = document.querySelector('#pontuacao');

//Variável que irá armazenar o valor da pontuação vitoriosa
let pontVtrs = Number(selectPontVtrs.value);

//Função que irá mudar o valor conforme muda o valor do select
selectPontVtrs.addEventListener('change', (e) => {
    pontVtrs = Number(e.target.value);

    pontoJogUm = 0;
    pontoJogDois = 0;
    spanJog1.textContent = `${pontoJogUm}`;
    spanJog2.textContent = `${pontoJogDois}`;
    spanJog1.style.color = 'black';
    spanJog2.style.color = 'black';
    btnJogadorUm.disabled =  false;
    btnJogadorDois.disabled = false;
})





//Parte relacionada ao encerramento do jogo
const conferePlacar = () => {
    if(pontoJogUm === pontVtrs){
        spanJog1.style.color = 'green';
        spanJog2.style.color = 'red';
        btnJogadorUm.disabled = true;
        btnJogadorDois.disabled = true;
    }
    else if(pontoJogDois === pontVtrs){
        spanJog2.style.color = 'green';
        spanJog1.style.color = 'red';
        btnJogadorUm.disabled = true;
        btnJogadorDois.disabled = true;
    }
}