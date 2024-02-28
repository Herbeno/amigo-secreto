// Criando o array para realizar o sorteio
let amigos = [];

// Vamos iniciar pela função adicionar()
function adicionar() {
    // Recuperando o nome do amigo e a lista de amigos
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    // Verificando se o campo está vazio
    if (amigo.value == '') {
        alert('Insira um nome válido.');
        return;
    }

    // Verficar se o nome já existe na lista
    if (amigos.includes(amigo.value)) {
        alert('Este nome já está na lista de amigos.');
        return;
    }

    // Depois de ter realizado as verificações, vamos adicionar os nomes na lista
    amigos.push(amigo.value);

    // Colocando o nome dos amigos que já foram digitados na lista
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    
    amigo.value = '';
    // Atualizando a visualização da lista
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    lista = document.getElementById('lista-amigos');
    lista.innerHTML = ''

// Adiciona como um elemento clicável para cada nome na lista para remoção
amigos.forEach((amigo, index) => {
    let amigoElement = document.createElement('li');
    amigoElement.textContent = amigo;
    amigoElement.classList.add('amigo-item');
    amigoElement.addEventListener('click', function() {
        removerAmigo(index);
    });
    lista.appendChild(amigoElement);
});
}

// Criando a função para fazer o sorteio dos nomes
function sortear() {
    // Não permite que o sorteio seja feito com menos de 2 pessoas
    if (amigos.length < 3) {
        alert('É necessário ter pelo menos 3 nomes para realizar um sorteio.')
        return
    }
    embaralhar(amigos)
    let sorteio = document.getElementById('lista-sorteio');
   for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

// Usaremos o algorítimo de Ficher-Yates para criar uma função para embaralhar esse array
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Reiniciar o sorteio e apagar todos os nomes que foram sorteados anteriormente.
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
} 

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo da lista pelo índice
    atualizarListaAmigos(); // Atualiza a visualização da lista
}