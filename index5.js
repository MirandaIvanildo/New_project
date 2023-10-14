function calcularArea() {
    var lados = parseFloat(document.getElementById("lados").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    
    if (!isNaN(lados) && !isNaN(comprimento) && lados > 2 && comprimento > 0) {
        var area = (lados * Math.pow(comprimento, 2)) / (4 * Math.tan(Math.PI / lados));
        document.getElementById("resultado").textContent = area.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para o número de lados e comprimento do lado.";
    }
}
