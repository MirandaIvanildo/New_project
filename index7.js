function calcularArea() {
    var raio = parseFloat(document.getElementById("raio").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (!isNaN(raio) && !isNaN(altura) && raio > 0 && altura > 0) {
        var geratriz = Math.sqrt(raio * raio + altura * altura);
        var area = Math.PI * raio * (raio + geratriz);
        document.getElementById("resultado").textContent = area.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para o raio da base e altura do cone.";
    }
}
