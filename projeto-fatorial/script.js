var calcular = document.querySelector('.btn-calcular');
calcular.addEventListener('click', () => {
    var numero = document.querySelector('#txtNum');
    var resultado = document.querySelector('#resultado');
    var n = parseInt(numero.value);
    resultado.textContent = `O fatorial de ${n}! é ${fatorial(n)}`;
});

function fatorial(n){
    let fat = 1;

    for(let i = n; i >= 1; i--){
        fat *= i;
    }
    
    return fat;
}