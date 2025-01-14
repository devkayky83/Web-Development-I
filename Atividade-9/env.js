function adicionarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const idade = document.getElementById('idade').value;

    if (nome && email && telefone && endereco && idade) {
        const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${endereco}</td>
            <td>${idade}</td>
            <td><button onclick="excluirLinha(this)">Excluir</button></td>
        `;

        document.getElementById('cadastroForm').reset();
    } else {
        alert('Preencha todos os campos!');
    }
}

function excluirLinha(botao) {
    const linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}