/* import {mudaParaVerde, mudaParaMaduro} from "/.funcoes.js"; */



/*
function executora(f) {
    f();
}

function minhaFuncao() {
    alert('Executada.');
}

executora(minhaFuncao);
*/

/* function executora(f) {
    f();
}

const minhaFuncao = function () {
    alert('Executada 2.');
}

executora(minhaFuncao);
*/

/* function executora(f) {
    f();
}

const minhaFuncao = () => {
    alert('Executada 3.');
}

executora(minhaFuncao);
*/

/* function executora(f) {
    f();
}

const minhaFuncao = () => {
    alert('Executada 3.');
}

executora(() => {
    alert('Executada 4.');
});
*/

/* function executora(f) {
    f();
}

executora(() => alert('Executada 5.'));
*/

/* window.addEventListener('load', () => {
    alert('Janela carregada');
});

const bt01 = document.getElementById('bt01');
bt01.addEventListener('click', () => {
    const img = document.getElementById('img01');
    img.src = './imgs/OIP (1).jpg'; 
});

const bt02 = document.getElementById('bt02');
bt02.addEventListener('click', () => {
    const img = document.getElementById('img01');
    img.src = './imgs/OIP (2).jpg'; 
});
*/

window.addEventListener('load', () => {
    alert('Janela carregada');
});

const bt01 = document.getElementById('bt01');
bt01.addEventListener('click', Trocador.paraVerde);

const bt02 = document.getElementById('bt02');
bt02.addEventListener('click', Trocador.paraMaduro);