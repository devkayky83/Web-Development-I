// const carregaCidades = () => {
//     const uf = document.querySelector('#estado').value;
//     const select = document.querySelector('#cidade');
//     select.innerHTML = '';
//     fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
//     .then((res) => {
//         return res.json();
//     })
//     .then((dados) => {
//         console.log(dados);
//         for (let i = 0; i < dados.legth; i++) {
//             const option = document.createElement('option');
//             option.innerText = dados[i].nome;
//             Selection.append(option);
//         }
//     })
// };

// const uf = documento.querySelector('#estado');
// uf.addEventListener('input, carregaCidades');

const carregaCidades = async () => {
    const uf = document.querySelector('#estado').value;
    const select = document.querySelector('#cidade');
    select.innerHTML = '';
    const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    const dados = await res.json();
    for (let i = 0; i < dados.legth; i++) {
        const option = document.createElement('option');
        option.innerText = dados[i].nome;
        Selection.append(option);
    }
};

const uf = documento.querySelector('#estado');
uf.addEventListener('input, carregaCidades');