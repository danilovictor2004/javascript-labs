var adicionar = document.querySelector('.btn-calcular');
var finalizar = document.querySelector('#btn-finalizar');
var lista = document.querySelector('#lista');
var numeros = [];

adicionar.addEventListener('click', () => {
    var txtNum = document.querySelector('#txtNum');
    var num = parseInt(txtNum.value);

    if(validaCampos()){
        alert("Informe um número...");
    } else if(!(numeros.indexOf(num) == -1)){
        alert("Este número não pode ser adicionado novamente!");
        limparDados();
    } else {
        adicionaNumero(num);
        var item = document.createElement('option');
        item.textContent = `O valor ${num} foi adicionado`;
        lista.appendChild(item);
        limparDados();
    }
});

function limparDados(){
    txtNum.value = '';
    txtNum.focus();
    resultado.innerHTML = '';
}

finalizar.addEventListener('click', () => {
    var resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    var totalElementos = numeros.length;
    var soma = 0;
    var menor = numeros[0];
    var maior = numeros[0];

    if(numeros.length == 0){
        alert("Adicione valores antes de finalizar");
    } else{
        for(var n in numeros){
            soma += numeros[n];
            if(menor > numeros[n]){
                menor = numeros[n];
            } else {
                maior = numeros[n];
            }
        }
        var media = (soma / totalElementos).toFixed(2);
    
        resultado.innerHTML += `<p>Total de elementos: ${totalElementos}</p>`;
        resultado.innerHTML += `<p>A soma dos valores é: ${soma}</p>`;
        resultado.innerHTML += `<p>Media dos valores: ${media}`;
        resultado.innerHTML += `<p>Menor valor: ${menor}`;
        resultado.innerHTML += `<p>Maior valor: ${maior}`;
    }
});

function adicionaNumero(num) {
    if (num >= 1 && num <= 100) {
        numeros.push(num);
    }
    else {
        alert("Número fora do intervalo!");
    }
}

function validaCampos() {
    if(txtNum.value.length == 0){
        return true;
    } else {
        return false;
    }
}