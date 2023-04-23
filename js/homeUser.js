

document.querySelector("#newFilaForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el comportamiento de envío predeterminado del formulario
    
    // Obtén los datos del formulario
    const broker = document.getElementById("broker").value;
    const ticker = document.getElementById("ticker").value;
    const quantity = document.getElementById("quantity").value;
    const price = document.getElementById("price").value;
    
    // Crea una nueva fila con los datos del formulario
    const newRow = `
    <tr id="${rowId}" class="portfolio__fila">
    <td id="broker" class="px-1">${broker}</td>
    <td id="ticker" class="t-naranja">${ticker.toUpperCase()}</td>
    <td id="cantidad" class="">${quantity}</td>
    <td id="precioMedio" class="">${price}</td>
    <td id="inversion" class="">${(quantity * price).toFixed(2)}</td>
    <td id="valorActual" class="py-05"><input id="cotiTH" class="valorActual-placeholder" type="number" step="0.01" defaultValue="${price}" placeholder="Manual"></td>
    <td id="diferencia" class=""></td>
    <td id="diferenciaPercent" class=""></td>
    <td id="btnMenuFilaPort" class="cursor"><img class="size-min op-50" src="img/linear_scale_white_24dp.svg" alt=""></td>
    </tr>
    `;
    
    // Encuentra la tabla y agrega la nueva fila debajo de la última fila
    // const portfolioID = document.querySelector(portfolioName).value;
    const table = document.querySelector(portfolioID); // Reemplaza "ID_DE_LA_TABLA" con el ID de la tabla del DOM
    table.appendChild(newRow);
  
    // Limpia el formulario
    document.getElementById("newFilaForm").reset();
    
    // Cierra el modal
    document.getElementById(`myModalFila-${rowId}`).style.display = "none";
});





  // Fin del código DOM

