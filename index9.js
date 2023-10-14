function calcularArea() {
    var lados = parseFloat(document.getElementById("lados").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var alturaBase = parseFloat(document.getElementById("alturaBase").value);
    var alturaPrisma = parseFloat(document.getElementById("alturaPrisma").value);
    
    if (!isNaN(lados) && !isNaN(comprimento) && !isNaN(alturaBase) && !isNaN(alturaPrisma) && lados > 2 && comprimento > 0 && alturaBase > 0 && alturaPrisma > 0) {
        var areaBase = lados * comprimento * alturaBase;
        var areaLateral = 2 * lados * alturaBase * alturaPrisma;
        var areaTotal = areaBase + areaLateral;
        document.getElementById("resultado").textContent = areaTotal.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos para o número de lados, comprimento do lado, altura da base e altura do prisma.";
    }
}
