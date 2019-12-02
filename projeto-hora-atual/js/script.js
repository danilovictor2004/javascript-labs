function carregar() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var resultado = document.querySelector("#resultado");
    var imagem = document.querySelector("#imagem");

    if(hora >=0 && hora < 12){
        resultado.innerHTML = `A hora atual é <strong>${hora}h${minutos}</strong>`;
        imagem.src = "imagens/manha.png";
        document.body.classList.add("manha");
    } else if (hora <= 18){
        resultado.innerHTML = `A hora atual é <strong>${hora}h${minutos}</strong>`;
        imagem.src = "imagens/tarde.png";
        document.body.classList.add("tarde");
    } else {
        resultado.innerHTML = `A hora atual é <strong>${hora}h${minutos} </strong>`;
        imagem.src = "imagens/noite.png";
        document.body.classList.add("noite");
    }
}