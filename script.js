// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X.
const etiquetas = ["p1", "p2", "p3", "p4", "p5"];
// Podemos tener varios conjuntos de datos. Comencemos con uno
let datosVentas2020 = {
  label: "l1",
  data: [0, 7, 3, 1, 0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: "rgba(54, 162, 235, 0.2)", // Color de fondo
  borderColor: "rgba(54, 162, 235, 1)", // Color del borde
  borderWidth: 1, // Ancho del borde
};
const g1 = {
  label: "l2",
  data: [0, 3, 2, 1, 0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
  backgroundColor: "rgba(54, 162, 235, 0.2)", // Color de fondo
  borderColor: "rgba(54, 162, 235, 1)", // Color del borde
  borderWidth: 1, // Ancho del borde
};
new Chart($grafica, {
  type: "line", // Tipo de gráfica
  data: {
    labels: etiquetas,
    datasets: [
      datosVentas2020,
      g1,
      // Aquí más datos...
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

function myFunction() {
  le;
  alert("The form was submitted");
}
