const equipos = [
  {
    serie: "EQ001",
    tipo: "Laptop",
    fecha: "2025-04-10",
    estado: "En revisión",
    diagnostico: "Pendiente"
  },
  {
    serie: "EQ002",
    tipo: "Impresora",
    fecha: "2025-04-01",
    estado: "Reparado",
    diagnostico: "Cambio de rodillos"
  },
  {
    serie: "EQ003",
    tipo: "Tablet",
    fecha: "2025-03-28",
    estado: "Reparado",
    diagnostico: "Pantalla reemplazada"
  },
  {
    serie: "EQ004",
    tipo: "Servidor",
    fecha: "2025-04-15",
    estado: "En revisión",
    diagnostico: "Pendiente"
  }
];

function renderTabla(lista) {
  const tbody = document.getElementById("tablaEquipos");
  tbody.innerHTML = "";

  lista.forEach(e => {
    let badgeClass =
      e.estado === "Reparado" ? "success" :
      e.estado === "En revisión" ? "warning" : "danger";

    tbody.innerHTML += `
      <tr>
        <td>${e.serie}</td>
        <td>${e.tipo}</td>
        <td>${e.fecha}</td>
        <td><span class="badge bg-${badgeClass}">${e.estado}</span></td>
        <td>${e.diagnostico}</td>
      </tr>
    `;
  });
}

document.getElementById("buscarEquipo").addEventListener("input", function () {
  const filtro = this.value.toLowerCase();
  const filtrados = equipos.filter(e =>
    e.serie.toLowerCase().includes(filtro) ||
    e.estado.toLowerCase().includes(filtro)
  );
  renderTabla(filtrados);
});

renderTabla(equipos);
