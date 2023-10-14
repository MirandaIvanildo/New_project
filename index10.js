function calcularArea() {
    var verticesTexto = document.getElementById("vertices").value;
    var verticesArray = verticesTexto.split("\n").map(coord => coord.split(",").map(Number));

    if (verticesArray.length >= 3) {
        var area = 0;

        for (var i = 0; i < verticesArray.length; i++) {
            var x1 = verticesArray[i][0];
            var y1 = verticesArray[i][1];
            var x2, y2;

            if (i === verticesArray.length - 1) {
                x2 = verticesArray[0][0];
                y2 = verticesArray[0][1];
            } else {
                x2 = verticesArray[i + 1][0];
                y2 = verticesArray[i + 1][1];
            }

            area += (x1 * y2) - (x2 * y1);
        }

        area = Math.abs(area) / 2;
        document.getElementById("resultado").textContent = area.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira pelo menos 3 coordenadas de vértices.";
    }
}
