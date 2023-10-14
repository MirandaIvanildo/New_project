function calcularArea() {
    var raio = parseFloat(document.getElementById("raio").value);
    
    if (!isNaN(raio) && raio > 0) {
        var area = 4 * Math.PI * raio * raio;
        document.getElementById("resultado").textContent = area.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira um valor válido para o raio da esfera.";
    }
}
