function testewindows(){
    // console.log(window);
    // console.log(window.document);
    // console.log(window.location);
    // window.open('https://www.google.com')
    // window.alert('Teste Window');



    console.log(window);
    console.log(document);
    console.log(location);
    open('https://www.google.com');
    alert('Teste Window');
}

function testeDocument(){
    console.log(document);
    console.log(document.forms);
    console.log(document.links);
    console.log(document.images);
}

function testebusca() {
    //pelo id
    console.log(nome);

    //pelo ID via document
    const iptNome = document.getElementById('nome');
    console.log(iptNome);

    //pelo nome da tag
    links = document.getElementsByTagName('a');
    console.log(links);

    //pelo seletor CSS (unico elemento)
    const ele = document.querySelector('section a');
    console.log(ele);

    //pelo seletor CSS (varios elementos)
    const eles = document.querySelectorAll('section a');
    console.log(eles);
}

function testeCssTexto() {
    const h1 = document.querySelector('header h1');
    const h3 = document.querySelector('footer h3');
    const tabela = document.querySelector('table');

    h1.innerText = 'Titulo Novo';
    h1.style.color = 'blue';
    h1.style.textAlign = 'center';
    h1.style.borderBottom = '0.2px solid red';

    h3.className = 'titulo-13';

    tabela.classList.remove('tabela');
}

function testeRemover(event){
    const texto = event.target.getAttribute('data-texto');
    if(confirm(`Apagar ${texto}?`)){
        event.target.parentNode.parentNode.remove();
    }
}

function testeCriarEncaixar(event) {
    event.preventDefault();
    const corpoTabela = document.getElementById('corpo_tabela');
    const iptNome = document.getElementById('nome');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');    
    const td2 = document.createElement('td');   
    const td3 = document.createElement('td');
    const btEx = document.createElement('button');
    btEx.innerText = 'Excluir';
    btEx.setAttribute('data-texto', iptNome.value);
    btEx.addEventListener('click', testeRemover);
    td1.innerText = '#';
    td2.innerText = iptNome.value;
    td3.append(btEx);
    tr.append(td1, td2, td3);
    corpoTabela.append(tr);
}

const bt1 = document.getElementById('bt01');
bt1.addEventListener('click', testewindows);

const bt2 = document.getElementById('bt02');
bt2.addEventListener('click', testeDocument);

const bt3 = document.getElementById('bt03');
bt3.addEventListener('click', testebusca);

const bt4 = document.getElementById('bt04');
bt4.addEventListener('click', testeCssTexto);

const form = document.querySelector('form');
form.addEventListener('submit', testeCriarEncaixar);