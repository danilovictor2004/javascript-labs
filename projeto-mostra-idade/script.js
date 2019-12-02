var calcular = document.querySelector(".btn-calcular");
calcular.addEventListener("click", function() {
    var txtNome = document.querySelector("#txtNome")
    var txtAnoNasc = document.querySelector("#txtAnoNasc");
    var nome = txtNome.value;
    var anoNasc = parseInt(txtAnoNasc.value);
    var data = new Date();
    var anoAtual = data.getFullYear();

    var idade = anoAtual - anoNasc;

    if(anoNasc > anoAtual || txtAnoNasc.value.length == 0) {
        alert('Ano inválido');
    } else {
        var resultado = document.querySelector("#resultado");
        resultado.textContent = `${nome} tem ${idade} anos`;
    }
});