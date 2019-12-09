var calcular = document.querySelector(".btn-calcular");
calcular.addEventListener("click", () => {
    var txtNumero = document.querySelector('#txtNumero');
    var res = document.querySelector('#txtResultado');
    res.innerHTML = "";

    if(txtNumero.value.length == 0) {
        alert("O campo não pode ser vazio");
    } else {
        var numero = parseInt(txtNumero.value);
    
        for(var i = 0; i <= 10; i++){
            var tabuada = numero * i;
            res.innerHTML += `${numero} X ${i} = ${tabuada} \n`;
        }

        limparNumero();
    }
});

function limparNumero(){
    txtNumero.value = "";
}