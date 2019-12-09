var contagem = document.querySelector(".btn-contar");
contagem.addEventListener('click', () => {
    var txtInicio = document.querySelector("#txtInicio");
    var txtFim = document.querySelector("#txtFim");
    var txtPasso = document.querySelector("#txtPasso");
    var resultado = document.querySelector("#resultado");

    if(validarCampos()){
        alert("[ERRO] Faltam dados no formulário");
    } else {
        var inicio = parseInt(txtInicio.value);
        var fim = parseInt(txtFim.value);
        var passo = parseInt(txtPasso.value);

        if(passo <= 0){
            alert("O passo não pode ser 0, será alterado para o PASSO 1");
            passo = 1;
        }

        resultado.innerHTML = `Contagem: <br>`;
        if(inicio < fim){
            //contagem crescente
            for(var i = inicio; i <= fim; i += passo){
                resultado.innerHTML += `${i} \u{1F449}`;
            }
        } 
        else {
            //contagem decrescente
            for(var i = inicio; i >= fim; i -= passo){
                resultado.innerHTML += `${i} \u{1F449}`;
            }
        }

        resultado.innerHTML += `\u{1F3C1}`;
    }
    
});

function validarCampos(){
    if(txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0){
        return true;
    } else {
        return false;
    }
}