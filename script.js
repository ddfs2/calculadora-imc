const botao = document.querySelector("button");
const resultadoImc = document.getElementById("resultado__imc");
const resultadoMetrica = document.getElementById("resultado__metrica");
var inputAltura = document.getElementById("altura");
var inputPeso = document.getElementById("peso");

function zerarInput() {
    inputAltura.value = "";
    inputPeso.value = "";
}

function mostraResultado(event) {
    event.preventDefault(); 

    var altura = inputAltura.value;
    var peso = inputPeso.value;
    var imc = (peso / (altura ** 2)).toFixed(2);

    const magreza = imc < 18.5;
    const normal = imc >= 18.5 && imc <= 24.9;
    const sobrepeso = imc >= 25 && imc <= 29.9;
    const obesidade = imc >= 30 && imc <= 39.9;
    const obesidadeGrave = imc >= 40;

    const metricas = [magreza, normal, sobrepeso, obesidade, obesidadeGrave];
    const mensagens = ["Magreza", "Normal", "Sobrepeso", "Obesidade", "Obesidade grave"];

    for (posicao = 0; posicao < metricas.length; posicao++) {
        if (metricas[posicao] == true) {
            const mensagem = mensagens[posicao];
            resultadoImc.innerHTML = `${imc}`;
            resultadoMetrica.innerHTML = `${mensagem}`;
        }
    }

    zerarInput(); 
}

botao.addEventListener("click", mostraResultado);
