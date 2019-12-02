var calcular = document.querySelector(".btn-calcular");
calcular.addEventListener("click", function(){
    var txtAltura = document.querySelector("#txtAltura");
    var txtPeso = document.querySelector("#txtPeso");

    var altura = parseFloat(txtAltura.value);
    var peso = parseFloat(txtPeso.value);

    var imc = (peso / (altura*altura)).toFixed(2);

    var resultado = document.querySelector("#resultado");
    resultado.textContent = `Seu IMC é: ${imc}`;
});