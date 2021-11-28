//FILA PORTFOLIO
const ticker = "ETH";
const cantidad = 100;
const precioCompra = 500;
const inversion = (cantidad * precioCompra);
const valorActual = 1500;


//Seleccionar celda ticker

const nombreMoneda = document.createElement('')

nombreMoneda.

console.log(tickerUp);

//Nueva compra
const newCantidad = 153;
const newPrecioCompra = 1000;
const newInversion = (newCantidad * newPrecioCompra);

//Precio medio del activo
const cantidadTotal = (cantidad + newCantidad);
const precioMedio = ((inversion + newInversion) / (cantidad + newCantidad)); 

//Inversión total
const inversionTotal = (inversion + newInversion);

//Profit
const diferencia = ( (cantidadTotal * valorActual) - (cantidadTotal * precioMedio) );

//Catital total
const capitalNeto = (inversionTotal + diferencia);

//Profit %
const diferenciaPercent = ((valorActual / precioMedio) * 100 - (100));

console.log (`Tengo ${cantidad} ${ticker} que los compré a ${precioCompra}$,`);
console.log (`eso fue una inversión de ${inversion}$.`);

//Nueva compra
console.log (`Hoy he comprado ${newCantidad} ${ticker} más a un precio de ${newPrecioCompra}$,`);
console.log (`siendo ésto una inversión de ${newInversion}$ más.`);

//Media General
console.log (`Ahora tengo una cantidad total de ${cantidadTotal}${ticker} a un precio medio de ${precioMedio}$`);
console.log (`con una inversión total de ${inversionTotal}$`);
console.log (`Si ${ticker} llega al valor de ${valorActual}$,`);
console.log (`estaré obteniendo unas Ganancias de aproximadamente ${diferencia}$, que equivale a un ${diferenciaPercent}%.`);
console.log (`Esto significa que si vendiera todo, tendría un capital en ese momento de ${capitalNeto}$.`);

//Código para poder unir los dos valores en la celda "profit" en el portfolio Sicoiner.
let profitFilaPort = (`${diferencia}$ | ${diferenciaPercent}%`);

console.log ( profitFilaPort );















//Textos para recordar


const nuevoTicker = false;

//if(uno /* === true */) {
 //   console.log("Sí está correcto")
//} else {
//    console.log("No está correcto")
//}

console.log(nuevoTicker ? "Crear media del activo existente en el portfolio" : "Añadir nueva fila de activo en el Portofolio con el nuevo Ticker simbol")