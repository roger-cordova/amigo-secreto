let amigos = [];
function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo');  
    let listaIncluidos = document.getElementById('lista-amigos');

    if (nomeDoAmigo.value === ''){
        alert('Por favor informe um nome válido');
        nomeDoAmigo.focus();
        return;
    } 
    
    if (amigos.includes(nomeDoAmigo.value)){
        alert(`Nome ${nomeDoAmigo} ja incluido na lista`);
        return;
    }
    
    amigos.push(nomeDoAmigo.value);    

    if (listaIncluidos.textContent == ''){        
        listaIncluidos.textContent = nomeDoAmigo.value;
    }else {        
        listaIncluidos.textContent = listaIncluidos.textContent + ', ' + nomeDoAmigo.value;
    }
    nomeDoAmigo.value = '';
    nomeDoAmigo.focus();

}
function sortear(){
    let listaAmigoSecreto = document.getElementById('lista-sorteio');

    if(amigos.length < 4){
        alert('Necessário no mínimo 4 nomes para o soteio');
        return;
    }
    embaralha(amigos);
    
    for (let i = 0 ; i < amigos.length ; i++ ){    
        
        if(i == amigos.length - 1){
        
            listaAmigoSecreto.innerHTML += `${amigos[i]} --> ${amigos[0]} <br>`;
        }else {
        
            listaAmigoSecreto.innerHTML += `${amigos[i]} --> ${amigos[i + 1]} <br>`;
        }
            
        }
}
function reiniciar(){
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('nome-amigo').focus();
    amigos = [];

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
