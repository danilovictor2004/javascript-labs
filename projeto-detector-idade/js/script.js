var verifica = document.querySelector(".btn-detectar");
verifica.addEventListener('click', () => {
    var data = new Date();
    var txtAnoNasc = document.querySelector("#txtAnoNasc");
    var sexo = document.getElementsByName('sexo');
    var resultado = document.querySelector("#resultado");
    var imagem = document.querySelector("#imagem");
    
    var anoNasc = parseInt(txtAnoNasc.value);
    var anoAtual = data.getFullYear();
    var idade = anoAtual - anoNasc;

    if(txtAnoNasc.value.length == 0 || anoNasc > anoAtual){
        alert("[ERRO] Verifique os dados e tente novamente");
    } else{
        var genero = "";
        if(sexo[0].checked){
            genero = "homem";
            if(idade >= 0 && idade <= 10){
                imagem.src = "imagens/bebe-menino.png";
            } else if (idade <= 21) {
                imagem.src = "imagens/homem-jovem.png";
            } else if (idade <= 55) {
                imagem.src = "imagens/homem-adulto.png";
            } else {
                imagem.src = "imagens/homem-velho.png";
            }
        } else {
            genero = "mulher";
            if(idade >= 0 && idade <= 10){
                imagem.src = "imagens/bebe-menina.png";
            } else if (idade <= 21) {
                imagem.src = "imagens/mulher-jovem.png";
            } else if (idade <= 55) {
                imagem.src = "imagens/mulher-adulta.png";
            } else {
                imagem.src = "imagens/mulher-velha.png";
            }
        }
        resultado.textContent = `Detectamos ${genero} que tem ${idade} anos`;
    }
});