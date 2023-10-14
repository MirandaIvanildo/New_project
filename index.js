function calcularArea() {
  const raio = parseFloat(document.getElementById("raio").value);
  const area = Math.PI * Math.pow(raio, 2);
  document.getElementById("resultado").innerHTML = `Área da Esfera: ${area.toFixed(2)}`;
}

