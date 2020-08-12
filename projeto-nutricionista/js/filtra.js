var campoFiltro = document.querySelector("#filtra-paciente");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        for(var i = 0; pacientes.length; i++){
            var paciente = pacientes[i];
            
            var nomeTd = paciente.querySelector(".info-nome");            
            var nome = nomeTd.textContent;

            var expressao = new RegExp(this.value, "i");
            if(expressao.test(nome)){
                paciente.classList.remove("invisivel");
            } else{
                paciente.classList.add("invisivel");
            }
        }
    } else{
        for(var i = 0; pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});