document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Comprobante subido exitosamente.");
    this.reset();
  });
  
  const facturas = [
    { numero: "F001", fecha: "2025-04-01", monto: "$800.000", estado: "Pagada" },
    { numero: "F002", fecha: "2025-04-10", monto: "$500.000", estado: "Pendiente" },
    { numero: "F003", fecha: "2025-03-28", monto: "$1.200.000", estado: "Pagada" }
  ];
  
  function renderFacturas(lista) {
    const tbody = document.getElementById("tablaFacturas");
    tbody.innerHTML = "";
    lista.forEach(f => {
      tbody.innerHTML += `
        <tr>
          <td>${f.numero}</td>
          <td>${f.fecha}</td>
          <td>${f.monto}</td>
          <td><span class="badge ${f.estado === "Pagada" ? 'bg-success' : 'bg-danger'}">${f.estado}</span></td>
          <td><button class="btn btn-sm btn-outline-primary">Descargar</button></td>
        </tr>
      `;
    });
  }
  
  renderFacturas(facturas);
  
  document.getElementById("buscador").addEventListener("input", function () {
    const filtro = this.value.toLowerCase();
    const filtradas = facturas.filter(f => 
      f.numero.toLowerCase().includes(filtro) || f.fecha.includes(filtro)
    );
    renderFacturas(filtradas);
  });
  