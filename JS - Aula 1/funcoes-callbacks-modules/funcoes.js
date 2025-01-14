const mudaParaVerde = () => {
    const img = document.getElementById('img01');
    img.src = './imgs/OIP (1).jpg'; 
};

const mudaParaMaduro = () => {
    const img = document.getElementById('img01');
    img.src = './imgs/OIP (2).jpg';
};

export { mudaParaVerde, mudaParaMaduro };

const Trocador = {
    'paraVerde': () => {
        const img = document.getElementById('img01');
        img.src = './imgs/OIP (1).jpg'; 
    },
    'paraMaduro': () => {
        const img = document.getElementById('img01');
        img.src = './imgs/OIP (2).jpg';
    }
}