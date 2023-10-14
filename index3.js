function calcularArea() {
    var lado = parseFloat(document.getElementById("lado").value);
    
    if (!isNaN(lado) && lado > 0) {
        var area = lado * lado;
        document.getElementById("resultado").textContent = area.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira um valor válido para o lado.";
    }
}





