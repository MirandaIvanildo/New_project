function calcularArea() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (!isNaN(base) && !isNaN(altura)) {
        var area = (base * altura) / 2;
        document.getElementById("resultado").textContent = area.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
    }
}
