var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdImc = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

	if(!pesoEhValido){
		tdImc.textContent = "Peso inválido!";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValido){
		tdImc.textContent = "Altura inválida!";
		alturaEhValido = false
		paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValido){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
}

function calculaImc(peso, altura) {
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso > 0 && peso < 1000){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if(altura > 0 && altura <= 3.0){
		return true;
	} else{
		return false;
	}
}

