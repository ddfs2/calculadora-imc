const botao = document.querySelector("button");
const resultadoImc = document.getElementById("resultado__imc");
const resultadoMetrica = document.getElementById("resultado__metrica");

function zerarInput(){
    (inputAltura.value).innerHTML = "";
    (inputPeso.value).innerHTML = "";
}

function mostraResultado(){
    var inputAltura = document.querySelector("#altura");
    var inputPeso = document.querySelector("#peso");
    var altura = inputAltura.value;
    var peso = inputPeso.value;
    var imc = (peso/(altura**2)).toFixed(2);

    const magreza = imc < 18.5;
    const normal = imc >= 18.5 && imc <= 24.9;
    const sobrepeso = imc >= 25 && imc <= 29.9;
    const obesidade = imc >= 30 && imc <= 39.9;
    const obesidadeGrave = imc >= 40;

    const metricas = [magreza, normal, sobrepeso, obesidade, obesidadeGrave];

    const mensagens = ["Magreza","Normal","Sobrepeso","Obesidade","Obesidade grave"];

    for(posicao = 0; posicao < metricas.length; posicao++){
        
        function verifica(i){
            if(metricas[i] == true){
            const mensagem = mensagens[i];

            resultadoImc.innerHTML = `${imc}`;
            resultadoMetrica.innerHTML = `${mensagem}`;
            

        }}

        verifica(posicao);
    }


    };

    
botao.onclick = mostraResultado;