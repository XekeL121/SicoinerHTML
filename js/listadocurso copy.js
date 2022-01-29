/* Qué estudiar y reforzar al acabar el curso 
- Tipos de operadores, funciones, objetos, métodos, arreglos, 
- Spread operator
- Diferencias entre objeto, arreglo, arrow function.
- Programación funcional
- Escapado de string (para garantizar la seguridad de los usuarios)
- Lista de addEventListeners
- traversing de DOM
- Use strict - para uso correcto del código
- Onject.frezze, object.seal
- ¿Por qué poner "return"?
- Videos 62 a 65 sobre funciones

*/


/* const producto = {
    nombre : 'blabalbla',
    precio : 300,
    disponible : true    
} */

/* function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('producto2', 100);

console.log(producto2); */
/* const Filas = [
    newFila1 = new Fila('userId_Port_Ticker', '02/08/2022', 'BINANCE', 'ETH', 5, 3000, this.cantidad * this.precioCompra, 3500, 6000, 50 ),
    newFila2 = new Fila('userId_Port_Ticker', '02/08/2022', 'BINANCE', 'ETH', 5, 3000, this.cantidad * this.precioCompra, 3500, 6000, 50 ),
    newFila3 = new Fila('userId_Port_Ticker', '02/08/2022', 'BINANCE', 'ETH', 5, 3000, this.cantidad * this.precioCompra, 3500, 6000, 50 )
]
const newFila = new Fila('user_Port_Ticker', '02/08/2022', 'BINANCE', 'ETH', 5, 3000, this.cantidad * this.precioCompra, 3500, 6000, 50  )
const newFila4 = new Fila('nuevaFila', '02/08/2022', 'BINANCE', 'ETH', 5, 3000, this.cantidad * this.precioCompra, 3500, 6000, 50  )
const newPort = new Portafolio( 'Portafolio1', Filas, 'Totales' )
const Totales = 1000;


function Fila(id, fecha, broker, ticker, cantidad, precioCompra, inversion, valorActual, profit, profit_percent){
    this.id = id;
    this.fecha = fecha;
    this.broker = broker;
    this.ticker = ticker;
    this.cantidad = cantidad;
    this.precioCompra = precioCompra;
    this.inversion = inversion;
    this.valorActual = valorActual;
    this.profit = profit;
    this.profit_percent = profit_percent;
}

function Portafolio(nombrePortafolio, filas, Totales){
    this.nombrePortafolio = nombrePortafolio;
    this.filas = Filas;
    this.Totales = Totales;
}

for(let i = 1; i < Filas.length; i++) {
    console.log(newPort);
} */


/* console.table(newFila); */


//**************************************************************************** Arreglo de portafolio



const portafolio = []

function inversionTotal(cantidad = 'no se ecuentra', precioCompra = 'no se ecuentra') {
    return cantidad * precioCompra;
}
/* const resultado = inversionTotal(); */
const resultado = inversionTotal(this.cantidad, this.precioCompra);



/* let resultado = this.precio * this.cantidad; */

const operacion1 = {
    id: 'user_port_ticker2',
    tipo: 'compra',
    fecha: '15/05/2022',
    broker: 'BINANCE',
    ticker: 'ETH',
    cantidad: 2,
    precioCompra: 3000,
    inversión: resultado, // En consola aparece que no es un número 'NaN'
    valorActual: 2500,
    profit: 500,
    profit_percent: 25
}

/* console.log(resultado); */

let portafolioView;

portafolioView = [...portafolio, operacion1];
// portafolioView = [...portafolioView, operacion2];

console.table(portafolioView);
console.log(resultado);
/* let uno = 1;
let dos = 2;

function sumar () {
    return uno + dos;
}

const resultado = sumar();
console.log(resultado); */