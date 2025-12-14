let listaIncluidos = document.getElementById('lista-amigos');
function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo');    
    adicionarNome(nomeDoAmigo.value);
    nomeDoAmigo.value = '';
    nomeDoAmigo.focus();

}
function sortear(){
    let listaParticipantes = document.getElementById('lista-amigos');
    let participantes = listaParticipantes.textContent; 
    
    if(participantes.length < 2){
        alert('É necessário ao menos 2 participantes para o sorteio!');
        return;
    }
    
    let listaSorteio = participantes.split(',').map(nome => nome.trim()).filter(nome => nome.length >0);

    if(participantes < 2){
        alert('É necessário ao menos 2 participantes para o sorteio!');
        return;
    }

    let sorteio = [...listaSorteio];
    let resultado = {};
    
    listaSorteio.forEach(lista => {
        let sorteado;
        let indice;
        do {
            indice = Math.floor(Math.random() * sorteio.length);
            sorteado = sorteio[indice];
        } while (lista === sorteado);
        sorteio.splice(indice, 1);

        resultado[lista] = sorteado;
    })

    for (const [sorteador,sorteado] of Object.entries(resultado)){            
            adicionarListaSorteada(sorteador, sorteado);            
        } 
}
function reiniciar(){
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('nome-amigo').focus();

}

function adicionarNome(nome) {
    if (nome === ''){
        alert('Por favor informe um nome válido');
        return;
    }
    if(listaIncluidos.textContent.length > 0){
        listaIncluidos.textContent += `, ${nome}`;
    }else {
        listaIncluidos.textContent = nome;
    }    
}

function adicionarListaSorteada(sorteador, sorteado) {
    console.log(`${sorteador} tirou ${sorteado}`);
let listaAmigoSecreto = document.getElementById('lista-sorteio');
let parSorteado = `${sorteador} --> ${sorteado}<br>`;


if (listaAmigoSecreto.textContent.length > 0){
    listaAmigoSecreto.innerHTML += parSorteado;    
} else {
    listaAmigoSecreto.innerHTML = parSorteado;
}
    
}