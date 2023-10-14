function calcularArea() {
    var baseMaior = parseFloat(document.getElementById("baseMaior").value);
    var baseMenor = parseFloat(document.getElementById("baseMenor").value);
    var altura = parseFloat(document.getElementById("altura").value);
    
    if (!isNaN(baseMaior) && !isNaN(baseMenor) && !isNaN(altura) && baseMaior > 0 && baseMenor > 0 && altura > 0) {
        var area = ((baseMaior + baseMenor) * altura) / 2;
        document.getElementById("resultado").textContent = area.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para as bases e altura.";
    }
}
