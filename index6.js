function calcularArea() {
    var raio = parseFloat(document.getElementById("raio").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (!isNaN(raio) && !isNaN(altura) && raio > 0 && altura > 0) {
        var area = 2 * Math.PI * raio * (raio + altura);
        document.getElementById("resultado").textContent = area.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para o raio da base e altura do cilindro.";
    }
}
