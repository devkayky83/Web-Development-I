function testesTipos() {
    let a = 10;
    let b = 25.65;
    let c = false;
    let d = 'Jonas';
    let e = [];
    let f = {};
    let g = "Luma";
    let h = `$(d) e $(g) são irmãos!`;

    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
    console.log(typeof g);
    console.log(h);
    console.log('1' + 1);
    console.log(Number.parseInt('1') + 1);
}

function testesLetConstVar() {
    if (true) {
        var a = 10;
    }
    console.log(a)

    const d = 45;
    d = 80;

    const v = [2, 3, 36, 6];
    v[0] = 10;

    if (true) {
        let b = 10;
    }
    console.log(b);
}

function testesControle() {
    const opt = confirm('Certeza?');

    if (opt) {
        alert('Feito');
    }
    else {
        alert('Cancelado');
    }
}

function testesRepeticao() {
    for (let i = 0; i < 15; i++) {
        console.log(i * 2);
    }
    let i = 100;
    while (i < 120) {
        console.log(i);
        i++;
    }
}

function testeObjetos() {
    const pessoa = {
        "nome": 'kiko',
        "Idade": 87,
        "cpf": '145.652.365-98'
    };
    console.log(typeof pessoa);
    console.log(generico);

    console.log(pessoa.nome);
    console.log(pessoa.Idade);
    console.log(pessoa.cpf);
}

function testesArray() {
    const generico = [12, 'Maria', 45];

    for (let i = 0; i < generico.length; i++){
        console.log(generico[i])
    }
}

function testesArraycomObjetos() {
    const pessoas = [
        {"nome": 'Clara', "Idade": 7},
        {"nome": 'Lia', "Idade": 8},
        {"nome": 'Tilte', "Idade": 10}
    ];

    for (let i = 0; i < pessoas.length; i++){
        console.log(pessoas[i].nome + ': ' + pessoas[i].Idade)
    };
}

function testesObjetosComArray() {
    const pessoa = {
        "nome": 'Ilda',
        "idade": 45,
        "dependentes": [
            'Ana', 'Paulo', 'Isaias'
        ]
    };
    console.log('Nome: ' + pessoa.nome);
    console.log('Idade: ' + pessoa.idade);
    console.log('Dependentes: ' + pessoa.dependentes.length);
    for(i = 0; i < pessoa.dependentes.length; i++){
        console.log(pessoa.dependentes[i]);
    }
}