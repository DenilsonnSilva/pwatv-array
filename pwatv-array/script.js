const inserirNumero = document.getElementById("inserirNumero");
const inserirIndice = document.getElementById("inserirIndice");
const btnFim = document.getElementById("btnFim");
const btnInicio = document.getElementById("btnInicio");
const btnLimpar = document.getElementById("btnLimpar");
const showList = document.getElementById("btn-5");
const btnRemover = document.getElementById("btnRemover");
const list = document.getElementById("lista");

let array = [];

function insertStart(){
    let value = parseInt(inserirNumero.value);
    if(value){
        array.unshift(value);
        inserirNumero.value = "";
        inserirNumero.focus();
        List();
        
    }else{
        alert("Digite um Número!")
    }
}

function insertEnd(){
    let value = parseInt(inserirNumero.value);
    if(value){ 
        array.push(value);
        inserirNumero.value = "";
        inserirNumero.focus()
        List();
    }else{
        alert("Digite um Número!")
    }
}

function clean(){
    array = [];
    inserirNumero.value = "";
    List();
}

function List(){
    list.innerText = '';
    array.forEach(n=>{
        item = document.createElement('li')
        item.textContent = n
        list.appendChild(item)
      })
}

function remove(){
    let valueIndex = parseInt(inserirIndice.value);

    if(array[valueIndex]){
        array.splice(valueIndex,1);
        inserirIndice.value = "";
        inserirIndice.focus();
        List();
    }else{
        alert("Digite um Indice válido");
        inserirIndice.value = "";
    }
}

btnFim.onclick = insertEnd;
btnInicio.onclick = insertStart;
btnLimpar.onclick = clean;
btnRemover.onclick = remove;