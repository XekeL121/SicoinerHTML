// Varias variables en un mismo conjunto
let categoria = "computadoras",
    marca = "Marca Famosa",
    calificación = "5";





// Concatenar variables
let producto = "Monitor"
let precio = "30 usd"

console.log(producto.concat(precio));
console.log(producto.concat("En descuento"));
console.log("El producto " + producto + " con un precio de: " + precio);
console.log("El producto " , producto , " con un precio de: " , precio);
console.log(`El producto ${producto} tiene un precio de ${precio}`);





//Eliminar espacios en blanco 
let producto = "          Monitor 20 Pulgadas          "

console.log(producto);
console.log(producto.length);
/* Eliminar espacios */
console.log(producto.trimStart());
console.log(producto.trimEnd());
/* Ambas direcciones */
console.log(producto.trimStart().trimEnd());
/* Ambas direcciones */
console.log(producto.trim());




//REEMPLAZAR EL TEXTO DE UNA VARIABLE
let producto = 'Monitor 20 Pulgadas'

/* Reemplazar */
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));
/* Cortar */
/* Desde índice 0 a 10 */
console.log(producto.slice(0, 10));
/* A partir de 8 */
console.log(producto.slice(8));
/* Alternativa a Slice */
console.log(producto.substring(0,10));
/* La diferencia es que si el orden no está bien sigue ejecutando el orden correcto */
console.log(producto.substring(2,1)); /* << Aquí está mal apropósito */
/* Otra forma de hacerlo (útil para extraer la primera letra de un usuario y crear Inicial de perfil) */
let usuario = "Juan";
console.log(usuario.substring(0, 1));
/* En este le dice que extraiga solo esa letra del indice 0 */
console.log(usuario.charAt(0));




//REPEAT
let producto = 'Monitor 20 Pulgadas';
let texto = 'en Promoción!!!'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto}`);





// Split
let actividad = "Leer, Caminar, Escribir, Ver películas";
/* Se ordena que separe las palabras por cada coma+espacio, útil para sacar una lista de algo separado por X */
console.log(actividad.split(", "));




//CONVERTIR MAYÚSCULAS Y MINÚSCULAS - Útil para guardar los registros de email en minúsculas por ejemplo
let producto = 'Monitor 20 Pulgadas';
console.log(producto.toUpperCase());
console.log(producto.toLowerCase());




//CONVERTIR NÚMEROS A STRINGS
let precio = 300;
console.log(precio.toString());




// NÚMEROS
// NÚMEROS

let numero1 = 100;
let numero2 = 10;
/* let resultado; */

/* Operaciones */
resultado = numero1 + numero2;
resultado = numero1 / numero2;

/* Modulo */
resultado = numero1 % numero2;

console.log(resultado);

//Acceder a Math
/* Poner en la consola Math */

//Utilizando Math
let resultado;
/* Redondea */
resultado = Math.round(2.2);
resultado = Math.ceil(2.2);
resultado = Math.floor(2.2);
/* Raíz cuadrada */
resultado = Math.sqrt(2.2);
/* Absoluto */
resultado = Math.abs(2.2);
/* Potencia - exponencial */
resultado = Math.pow(2.2);
/* Cuál es el Mínimo o Máximo */
resultado = Math.min(3,5,1,-3);
resultado = Math.max(3,5,1,-3);
/* Números random */
resultado = random();
resultado = random() * 20;  /* << Para que el resultado no sea decimal */
resultado = Math.floor(math.random() * 30) /* << Números aleatorios hasta el 30 (útil para rifas con límite de números) */


//AÑADIR DESCUENTOS O IMPUESTOS
//AÑADIR DESCUENTOS O IMPUESTOS

let resultado
/* Descuento del 20% */
resultado = (20 + 30 + 40 + 50 + 60) * .2;
/* Impuesto del 20% */
resultado = (20 + 30 + 40 + 50 + 60) * 1.2;



//INCREMENTAR LOS PUNTAJES O AUMENTAR NÚMEROS DE 1 EN 1 Y MÁS *****************************************

let puntaje = 5;
/* Muestra el número 5 */
puntaje++;
/* Muestra el número 6 */
++puntaje;
/* Muestra el número 5 */
puntaje--;
/* Muestra el número 4 */
--puntaje;
/* Aumenta o disminuye de 3 en 3 */
puntaje +=3;
puntaje -=3;

console.log(puntaje);




// CONVERTIR STRING A NÚMERO ****************
let numero1 = "20";
let numero2 = "20.2";
let numero3 = "veinte";
let numero4 = 20;
/* Convertirlo a número (entero por defecto)*/
console.log(Number.parseInt(numero1));
/* Convertir a número cuando tiene decimales */
console.log(Number.parseFloat(numero2));
/* Comprobar si un número es entero o no */
console.log(Number.isInteger(numero4));




// OPERADORES PARA SABER SI SON IGUALES LAS variables

let numero1 = 20;
let numero1 = "20";
let numero1 = 30;
/* Si uno es mayor o menor al otro */
console.log(numero1 > numero3);
/* Revisar si dos números son iguales (es true porque son el mismo tipo "número") */
console.log(numero1 == numero3);
/* Revisar si dos números son iguales (false porque === es más estricto que == y reconoce el valor) */
console.log(numero1 === numero3);
/* Revisar si dos números son iguales (true porque son el mismo valor) */
console.log(numero1 == numero2);
/* Revisar si dos números son iguales (false porque son diferente tipado) */
console.log(numero1 === numero2);
/* Para comprobar qué tipo de tipado tiene una variable  ********************************* */
console.log(typeof numero1);
console.log(typeof numero2);
/* Convertir el string numero2 a número y resultado true */
console.log(numero1 === parseInt(numero2));



// OPERADORES PARA SABER SI SON DIFERENTES variables

let password1 = "admin";
let password2 = "Admin";
/* Saber si es diferente una variable de otra (Da true porque son diferentes) */
console.log(password1 != password2);
/* Saber si dos números son diferentes (Da true, son diferentes porque son el mismo valor pero no el mismo tipado) */
console.log(numero1 != numero2);
/* Saber si dos números son diferentes (Da false, no son diferentes, porque son el mismo valor aunque no el mismo tipado, es menos estricto) */
console.log(numero1 !== numero2); 
/* Convertir numero2 en número, dará que son iguales porque son el mísmo número y tipado */ 
console.log(numero1 !== parseInt(numero2));




// BOOLEANS ******************

/* Cógido que se debe aplicar para la condición de los booleans  ************************************************** */
/* Para registrarse iniciar sesión  */
let autenticado = true;

if(autenticado /* === true */) {  /* << No se debe poner "=== true" ya que da por implícito que debe ser igual */
    console.log("Sí puedes ver Netflix");
} else {
    console.log("No, no puedes acceder");
}

/* Operador Ternario - Forma más reducida */
console.log(autenticado ? 'Sí está autenticado' : 'No está autenticado');



//OBJETOS MUY IMPORANTE ******************   **********************   ******************

/* Un objeto que agrupa todo en una sola variable */
/* Object Literal - */
let producto = {
    nombre: "Monitor 20 Pulgadas",  /* << IMPORTANTE poner comas en vez de punto y coma */
    precio: 300,
    disponible: true /* Se puede dejar sin coma o con coma, no punto y coma */
}


//Aceder a los valores de un objeto ******************************************************
/* Acceder al nombre */
console.log(producto);
console.log(producto.nombre);
/* También se puede */
console.log(producto['nombre']);
/* También se puede */
let nombre = producto.nombre;
console.log(nombre);
/* También se puede con Destructuring *************************************** */
let { nombre, precio, disponible } = producto; /* << Extrae lo que esté entre corchetes */
console.log(nombre);


// Agregar o eliminar propiedades de un objeto 
producto.imagen = "imagen.jpg";
/* Eliminar disponible */
delete producto.disponible;



//CREAR OBJETOS DENTRO DE OTRO OBJETO

let producto = {
    nombre: "Monitor 20 Pulgadas",  /* << IMPORTANTE poner comas en vez de punto y coma */
    precio: 300,
    informacion : {
        medidas : {
            peso: "5kg",
            medida: "1m"
        },
        fabricacion: {
            pais : 'China'
        },
    },
    disponible: true /* Se puede dejar sin coma o con coma, no punto y coma */
}
/* Saber cuál es el país */
console.log(producto.informacion.fabricacion.pais);

/* CON DESTRUCTURING ******************************************************************* */
/* Acceder a fabricación */
let { nombre, informacion: { fabricacion } } = producto;
/* Acceder a directamente al país */
let { nombre, informacion: { fabricacion: { pais } } } = producto;

console.log(informacion); /* << Daría error porque está especificando dentro de información */
console.log(fabricacion); /* << En la última daría error porque fabricacion como tal no está especificada, sería como la primera) */
console.log(nombre);
console.log(pais);



//USO ESTRICTO DEL CÓDIGO *************************************************
//USO ESTRICTO DEL CÓDIGO *************************************************

/* Utilización del use strict - No permite hacer uso de malas prácticas en el código, como tener propiedades sin variables.. */
"use strict";





// CONGELAR Y SELLAR UN OBJETO *************************************

const producto = {
    nombre: "Monitor 20 Pulgadas",  
    precio: 300,
    disponible: true,
}
/* Modificar y añadir al objeto */
producto.disponible = false;
producto.imagen = "imagen.jpg"

/* CONGELAR UN OBJETO - No permite modificar nada del objeto, bloquea cualquier cambio que se realice */
Object.freeze(producto);
/* SELLAR UN OBJETO - Permite modificar propiedades existentes, pero no añadir algo nuevo o eliminar */
Object.seal(producto);

console.log(producto); /* << Dará error porque no se puede modificar el objeto con freeze */
/* Saber si un objeto está congelado */
console.log(Object.isFrozen(producto)); /* << Mostrará True */
/* Saber si un objeto está Sellado */
console.log(Object.isSealed(producto)); /* << Mostrará True */




// UNIR DOS OBJETOS   **********************************************

const producto = {
    nombre: "Monitor 20 Pulgadas",  
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",  
    meedida: "1m",
}
/* Unión de dos objetos */
const unidos = Object.assign(producto, medidas); /* << Agrupa todas las propiedades en un objeto */
console.log(unidos);
/* Se puede hacer también con "Spread Operator" */
const unidos2 = { ...producto, ...medidas }
console.log(unidos2); /* << El resultado es el mismo que arriba */



//THIS THIS THIS THIS THIS

const nombre = "Tablet";
const precio = 600;

const producto = {
    nombre: "Monitor 20 Pulgadas",  
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`) /* << Sacaría "nombre" y "precio" de fuera si no fuese por el ".this" */
    }
}

producto.mostrarInfo();




// 44 Video (Comienza a ponerse difícil)
// OBJECT CONSTRUCTOR *****************************************************************************************
// OBJECT CONSTRUCTOR *****************************************************************************************
// OBJECT CONSTRUCTOR *****************************************************************************************

/* Object Literal - Como ejemplo de estructura de un objeto creado manualmente */
const portfolio = {
    nombre: "Criptomonedas",  
    ticker1: "ETH",
    ticker2: "ADA",
    ticker3: "DOT",
}

/* Object constructor - Estructura que tendrán los nuevos objetos */
function Portfolio(nombre, ticker1, ticker2, ticker3, ticker4) {
    this.nombre = nombre;
    this.ticker1 = ticker1;
    this.ticker2 = ticker2;
    this.ticker3 = ticker3;
    this.ticker4 = ticker4;
}
/* Creando un nuevo "Producto" */
const portfolio2 = new Portfolio("Acciones", "TSLA", "AAPL", "FB", "NNDM");
console.log(portfolio2);




// KEYS VALUES Y ENTRIES
// KEYS VALUES Y ENTRIES
// KEYS VALUES Y ENTRIES

const producto = {
    nombre: "Monitor 20 Pulgadas",  
    precio: 300,
    disponible: true,
}
/* Muestra las llaves */
console.log(Object.keys(producto));
/* Muestra los valores */
console.log(Object.values(producto));
/* Te lo muestra todo */
console.log(Object.entries(producto));



/* Ejemplo de cómo interpretaría un portfolio en Sicoiner? */
const portfolio = {
    nombre: "Criptomonedas",
    lista: {
        fila1: {
            tiker: "ETH",
            cantidad: 2,
            precioMedio: 1500,
            inversion: this.cantidad * this.precioMedio,
            cotizacion: 3000,
            valorMercado: this.cantidad * this.cotizacion,
            profit: this.valorMercado - this.inversion,
        },
        fila2: {
            tiker: "ADA",
            cantidad: 1000,
            precioMedio: 0.50,
            inversion: this.cantidad * this.precioMedio,
            cotizacion: 1.80,
            valorMercado: this.cantidad * this.cotizacion,
            profit: this.valorMercado - this.inversion,
        },
        fila3: {
            tiker: "DOT",
            cantidad: 300,
            precioMedio: 2.5,
            inversion: this.cantidad * this.precioMedio,
            cotizacion: 4,
            valorMercado: this.cantidad * this.cotizacion,
            profit: this.valorMercado - this.inversion,
        }
    },
    /*totales: {
        numActivos: ¿portfolio.lista.children.length? Debería ser 3,
         invertido: ("la suma de "inversion" de cada fila"),
        profitTotal: ("la suma de los "profit" de cada fila"),
        capitalTotalRelativo: ("la suma del "valorMercado" de cada fila"), 
    }*/ 
}






//CREAR ARREGLOS ********************************************************************************
//CREAR ARREGLOS ********************************************************************************
//CREAR ARREGLOS ********************************************************************************

/* Un objeto se crea entre corchetes {}, un arreglo entre llaves [] */
const numeros = [10, 20, 30]
/* Otra forma menos popular de crear arreglos */
const meses = new Array('Enero', 'Febrero', 'Marzo');
/* Un arreglo que contiene datos de todo tipo */
const deTodo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: 'Programador'}, [1, 2, 3]];
console.log(deTodo);





//ACCEDER A LOS VALORES DE UN ARREGLO *******************************
const numeros = [10,20,30,40,50, [1,2,3]]
console.table(numeros);
/* Acceder al 30 */
console.log(numeros[2]);
/* Acceder al 10 */
console.log(numeros[0]);
/* Acceder al número 2 de la subposición después del 50 */
console.log(numeros[5][1])



//RECORRER ARREGLOS Y HACER OPERACIONES ***************************************** *************** *** ** * * * ** * * * *
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.log(meses);
/* Acceder a todos los elementos del arreglo */
console.log(meses.length);

/* Recorrer un arreglo desde el inicio hasta el número de variables
es una función que tiene 3 partes
for(posición inicial; cuántas veces se debe ejecutar; Recorrer de 1 en 1) {  } */
for(let i = 0; i< meses.length; i++) {
    /* muestra las POSICIONES de meses de 1en 1 */
    console.log(i)
    /* muestra los VALORES de meses de 1 en 1 */
    console.log(meses[i])
}



//MANIPULAR UN ARREGLO ****************************************************** * * * * ** * 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
/* machacar en la posición 0 - Eliminaría Enero*/
meses[0] = 'Nuevo mes';
console.log(meses);




//AÑADIR NUEVOS ELEMENTOS AL FINAL Y AL PRINCPIO DE UN ARREGLO ****************************************************** * * * * ** * 
//AÑADIR NUEVOS ELEMENTOS AL FINAL Y AL PRINCPIO DE UN ARREGLO ****************************************************** * * * * ** * 
//AÑADIR NUEVOS ELEMENTOS AL FINAL Y AL PRINCPIO DE UN ARREGLO ****************************************************** * * * * ** * 
//AÑADIR NUEVOS ELEMENTOS AL FINAL Y AL PRINCPIO DE UN ARREGLO ****************************************************** * * * * ** * 

const meses = ['Enero', 'Febrero', 'Marzo'];
/* Agregar al final del arreglo*/
meses.push('Abril');
meses.push('Mayo');

//EJEMPLO DE CARRITO ***************************************************
//EJEMPLO DE CARRITO ***************************************************

/* Ir llenando carrito vacío */
const carrito = []
const producto = {
    nombre: "Monitor",
    precio: 400,
}
/* Ir añadiendo siempre al FINAL */
carrito.push(producto);
console.table(carrito);


/* Ir añadiendo siempre al PRINCIPIO */
const producto2 = {
    nombre: "Tablet",
    precio: 600,
}
carrito.unshift(producto2);
console.table(carrito);


/* ULIZANDO REST/SPREAD OPERATOR */
/* ULIZANDO REST/SPREAD OPERATOR */
const carrito = [];
const producto = {
    nombre: "Monitor",
    precio: 400,
}

const producto2 = {
    nombre: "Tablet",
    precio: 600,
}

const producto3 = {
    nombre: "Tablet",
    precio: 600,
}

/* Esta variable copia el carrito y añade el producto después */
let resultado;

resultado = [...carrito, producto];
/* Para seguir añadiendo al carrito sería: */
resultado = [...resultado, producto2];
/* Y continuaría */
resultado = [...resultado, producto3];
/* Cambiando el orden sería: */
resultado = [producto3, ... resultado];

console.table(resultado);





// ELIMINAR ELEMENTOS CON SPLICE
/* Eliminar último elemento de un arreglo */
carrito.pop();
/* Varias veces, elimina cada vez */
carrito.pop();
carrito.pop();
/* Eliminar del inicio del arreglo */
carrito.shift();
/* Eliminar el producto que seleccionemos */
carrito.splice(2, 1)  /* << Posición índice, cantidad */

console.table(carrito);



//DESTRUCTURING PARA ARREGLOS **************************************************
//DESTRUCTURING PARA ARREGLOS **************************************************
//DESTRUCTURING PARA ARREGLOS **************************************************

const numeros = [10,20,30,40,50];
/* Acceder al primero */
const [primero] = numeros;
/* Acceder al 30 */
const [primero, segundo, tercero] = numeros;
/* también acceder al 30 */
const [ , , tercero] = numeros;
/* Acceder al 10 y al 30 */
const [primer, , tercero] = numeros;
/* Acceder al 10 y al 20 pero los últimos estén en su propio arreglo */
const [primer, segundo, ...tercero] = numeros;

console.log(primero);
console.log(tercero);




// FOR EACH  Y   PUNTO MAP  ***************************************************************************
// FOR EACH  Y   PUNTO MAP  ***************************************************************************
// FOR EACH  Y   PUNTO MAP  ***************************************************************************

const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

for(let i = 0; i< meses.length; i++) {
    /* Mostrar los objetos dentro del arreglo */
    console.log(carrito[i]);
    /* Mostrar los nombres dentro de los objetos del arreglo */
    console.log(carrito[i].nombre);
    /* Acceder al precio de forma antigua */
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}` );
}
/* Array Metods correcto*/
    carrito.forEach( function(elObjeto) {
        console.log(`${elObjeto.nombre} - Precio: ${elObjeto.precio}` );
    } )




/// PUNTO MAP  *********************************************
/* Se diferencia de for each porque se añade como variable y no lleva console.log y porque a diferencia de for each, map sí crea un nuevo arreglo */
const nuevoArreglo = carrito.map( function(elObjeto) {
    return `${elObjeto.nombre} - Precio: ${elObjeto.precio}`;
} )




// FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES  ***************** ************* ***************
// FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES  ***************** ************* ***************
// FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES  ***************** ************* ***************
// FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES FUNCIONES  ***************** ************* ***************


// Video 56
/* Declaración de función - Llamar a la función puede estar antes de ser declarada*/
function sumar() {
    console.log(2 + 2);
}

sumar()
/* Llamar varias veces */
sumar()
sumar()


/* Expresión de función - Como una variable - No se puede llamar a la función "sumar2()" antes de ser declarada */
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2()
sumar2()


/* Funciones del Core en JAVASCRIPT - escribir window en consola para ver la lista de funciones del core*/





// MÉTODOS MÉTODOS MÉTODOS MÉTODOS MÉTODOS MÉTODOS *************************************************
// MÉTODOS MÉTODOS MÉTODOS MÉTODOS MÉTODOS MÉTODOS *************************************************
// MÉTODOS MÉTODOS MÉTODOS MÉTODOS MÉTODOS MÉTODOS *************************************************

/* DIFERENCIAS ENTRE FUNCIÓN Y MÉTODO */
const numero1 = 20;
const numero2 = "20";

/* FUNCIÓN "para convertir en número" */
console.log(parseInt(numero2))

/* MÉTODO "para convertir en número" */
console.log(numero1.toString())


// FUNCIONES CON PARÁMETROS Y ARGUMENTOS **************************** * ************************** ********************** ***  **
// FUNCIONES CON PARÁMETROS Y ARGUMENTOS **************************** * ************************** ********************** ***  **

/* Cálculos */
function sumar(a, b) { //<< son parámetros, no reales
    console.log( a + b);
}
sumar( 2, 3); //<< Argumentos, reales


/* Para nombres y apellidos */
function saludar (nombre, apellido) {
    console.log(`Hola ${nombre}, ${apellido}`);
}
saludar('Juan', 'De la Torre');

//Parámetros por DEFAULT - por si no hay valores en la función a Llamar
function saludar (nombre = 'Desconocido' , apellido = 'No tiene apellido' /* Se puede dejar espacio entre '' */) {
    console.log(`Hola ${nombre}, ${apellido}`);
}
saludar('Juan', 'De la Torre');






// COMUNICACIONES ENTRE FUNCIONES  *********************************** *********************** ***************************
// COMUNICACIONES ENTRE FUNCIONES  *********************************** *********************** ***************************
// COMUNICACIONES ENTRE FUNCIONES  *********************************** *********************** ***************************

iniciarApp(); // Esta es la llamada que activa todas las funciones de abajo

function iniciarApp() {
    console.log('Iniciando App');
    segundaFuncion(); // << Esta funcion está siendo llamada después de iniciar app - por eso está dentro
}

function segundaFuncion() {
    console.log('Desde la segunda función');
    usuarioAutenticado('Juan'); // << Esta llamada activa el ok además de registrar un dato de nombre.
}

function usuarioAutenticado(usuario) {
    console.log('Autenticado, espere');
    console.log('Hola ${usuario}, has sido autenticado exitosamente');
}


// FUNCIÓN QUE RETORNA UN VALOR A UNA VARIABLE CON RETURN*******************************************************************

function sumar(a,b) {
    return a + b ;
}
const resultado = sumar(2,3);

console.log(resultado);

/* Ejemplo más avanzado *************************** */
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total + 1.15
}

total= agregarCarrito(300);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);
console.log(total);



/* video 64 */


// AÑADIR FUNCIONES EN UN OBJETO (PARA CREAR LOS MENÚS?) **************** ************** ************** ************ **********
// AÑADIR FUNCIONES EN UN OBJETO (PARA CREAR LOS MENÚS?) **************** ************** ************** ************ **********
// AÑADIR FUNCIONES EN UN OBJETO (PARA CREAR LOS MENÚS?) **************** ************** ************** ************ **********
// AÑADIR FUNCIONES EN UN OBJETO (PARA CREAR LOS MENÚS?) **************** ************** ************** ************ **********
// AÑADIR FUNCIONES EN UN OBJETO (PARA CREAR LOS MENÚS?) **************** ************** ************** ************ **********

const reproductor =  {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`)
    },
    pausar: function() {
        console.log('pausando...')
    }
}
reproductor.reproducir(30);
reproductor.pausar();

/* Función por fuera del objeto */
reproductor.borrar = function(id) {
    console.log(`Borrando cación ${id}`)
}
reproductor.borrar()


/* Posible ejemplo con Sicoiner? */
const menuFila = {
    guardar: function(id) {
        console.log(`guardando los cambios en ${id}`);
    },
    newCompra: function(ticker) {
        console.log(`Operación de compra realizada en ${ticker}`);
    }    
}

menuFila.guardar(01);
menuFila.newCompra(ETH);


/* Añadirle otra función desde fuera del objeto */
menuFila.eliminar = function(ticker) {
    console.log(`Borrando fila de ${ticker}`);
}

menuFila.eliminar(ETH);






// 65
//ARROW FUNCTIONS ARROW FUNCTIONS ************************************
//ARROW FUNCTIONS ARROW FUNCTIONS ************************************
//ARROW FUNCTIONS ARROW FUNCTIONS ************************************

/* Arreglo normal */
const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}
aprendiendo();

/* Arrow Function */
const aprendiendo2 = () => console.log('Aprendiendo JavaScript');

aprendiendo2();

/* Más reducido aún */
const aprendiendo2 = () => 'Aprendiendo JavaScript';
console.log(aprendiendo2());

/* Súper reducido */
/* Normal */
const aprendiendo4 = function(tecnologia, tecnologia2) {
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo4('JavaScript', 'Node.js')


/* Reducida */
const aprendiendo4 = tecnologia => `Aprendiendo ${tecnologia}`;

console.log(aprendiendo4('JavasCript'));


/* Reducida pero con varios parámetros - Sí Requiere Paréntesis  */
const aprendiendo4 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo4('JavasCript', 'Node.js'));

/* Con Map o Foreach */

const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

/*  */
const nuevoArreglo = carrito.forEach( (elObjeto) => {
    return `${elObjeto.nombre} - Precio: ${elObjeto.precio}`;
} )





// MÉTODOS DE PROPIEDAD CON ARROW FUNCTION ********************************************* *************** *  * * *********** **


/* Normal */
const reproductor =  {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`)
    },
    pausar: function() {
        console.log('pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.crearPlaylist("Surfer")
reproductor.reproducirPlaylist("Surfer")


/* Arrow function */
const reproductor =  {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log('pausando...'),
    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    /* Set y Get */
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Enter Sandman'; // << Set
reproductor.obtenerCancion; // << Get

reproductor.reproducir(30)
reproductor.crearPlaylist("Surfer")
reproductor.reproducirPlaylist("Surfer")





//####################################################################################################################
//####################################################################################################################
//####################################################################################################################
//####################################################################################################################
//####################################################################################################################

//####################################################################################################################
//####################################################################################################################
//####################################################################################################################
//####################################################################################################################
//####################################################################################################################

//####################################################################################################################
//####################################################################################################################
//####################################################################################################################




// ESTRUCTURAS DE CONTROL - ESTRUCTURAS DE CONTROL - ***************************************
// ESTRUCTURAS DE CONTROL - ESTRUCTURAS DE CONTROL - ***************************************

// If SENCILLO
const puntaje = 1000;

if(puntaje == 1000) {
    console.log('Sí es igual');
} else {
    console.log('No es igual');
}

// == Menos estricto
// === estricto
// != Distinto
// !=== más estricto
// >= Mayor o igual



/* Mayor que, menor que */
let dinero = 500;
let totalAPagar = 300;
let tarjeta = true;
let cheque = true;

if(dinero >= totalAPagar) {
    console.log('Sí podemos pagar');
}else {
    console.log('Fondos insuficientes');
}

/* Estructura más compleja */
if(dinero >= totalAPagar) {
    console.log('Puedes pagar');
} else if (cheque /* == true */) {
    console.log('Puedes pagar con cheque');
} else if (tarjeta) {
    console.log('Puedes pagar con tarjeta');
} else {
    console.log('Fondos insuficientes');
}








// SWITCH KEYS   *****************************
// SWITCH KEYS   *****************************
// SWITCH KEYS   *****************************

let tecla = 'b';

switch (tecla) {
    case 'a':
        console.log(`Has pulsado la tecla ${tecla}`);
        break;  // <<< importante poner el break para que detenga el proceso
    case 'b':
        console.log(`Has pulsado la tecla ${tecla}`);
        break;
    case 'Eliminar':
        console.log(`Has pulsado ${tecla}`);
        break;
    default:
        console.log('Aún no has pulsado ninguna tecla');
        break;
}



// OPERADOR &&&&&&&&&&& OPERADOR &&&&&&&&&&&   ************************ ************************ ************************ *************
// OPERADOR &&&&&&&&&&& OPERADOR &&&&&&&&&&&   ************************ ************************ ************************ *************
// OPERADOR &&&&&&&&&&& OPERADOR &&&&&&&&&&&   ************************ ************************ ************************ *************

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// CONDICIONES PARA VARIOS IF
/* Usuario puede pagar un producto de 300$  ******************************* * * * * ** * * * * * * ** * *  */
const usuario = {
    autenticado: true,
    id: "001",
    nombre: "Óscar",
    apellidos: "Mahíques Alandete",
    email: "oscarmahiques@gmail.com",
    cartera: 300,
}

let precio = 300;

if(usuario.cartera >= precio && usuario.autenticado) {
    console.log(`Hola ${usuario.nombre}, puedes comprar`)
} else if(!usuario.autenticado) {
    console.log('Debes ser usuario registrado')
} else if(usuario.cartera < precio) {
    console.log('No tienes fondos suficientes')
} else {
    console.log('Enviar a registro')
}
    


// OPERADOR "OR" ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// OPERADOR "OR" ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// OPERADOR "OR" ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log(`Sí puedes pagar`);
} else {
    console.log(`No puedes pagar`);
}


// if - switch - operador ternario

// DETENER EJECUCIÓN CON UNA FUNCIÓN ****************************************************************
// DETENER EJECUCIÓN CON UNA FUNCIÓN ****************************************************************
// DETENER EJECUCIÓN CON UNA FUNCIÓN ****************************************************************
// DETENER EJECUCIÓN CON UNA FUNCIÓN ****************************************************************

/* Forma normal */
const puntaje = 450;

if(puntaje > 400) {
    console.log(`Buen puntaje`);
    return;
} else if(puntaje > 300) {
    console.log(`Muy buen puntaje`);
    return;
}

/* Forma más profesional */
const puntaje = 450;

function revisarPuntaje(){
    if(puntaje > 400) {
        console.log(`Buen puntaje`);
        return;
    } 
    
    if(puntaje > 300) {
        console.log(`Muy buen puntaje`);
        return;
    }
}
revisarPuntaje();



// OPERADOR TERNARIO TERNARIO TERNARIO TERNARIO  **************************************** 
// OPERADOR TERNARIO TERNARIO TERNARIO TERNARIO  **************************************** 
// OPERADOR TERNARIO TERNARIO TERNARIO TERNARIO  **************************************** 
// OPERADOR TERNARIO TERNARIO TERNARIO TERNARIO  **************************************** 
// OPERADOR TERNARIO TERNARIO TERNARIO TERNARIO  **************************************** 

let autenticado = true;
let puedePagar = true;

/* Normal */
console.log(autenticado && puedePagar ? 'Si puede pagar' : "No puede pagar");

/* ternario */
console.log(autenticado ? puedePagar ? 'Si está autenticado y puede pagar' : "Sí autenticado, no puede pagar" : "No está autenticado");






// ITERADORES ITERADORES ITERADORES ******************************* ******************************** **************************
// ITERADORES ITERADORES ITERADORES ******************************* ******************************** **************************
// ITERADORES ITERADORES ITERADORES ******************************* ******************************** **************************
// ITERADORES ITERADORES ITERADORES ******************************* ******************************** **************************

/* Mostrar los resultados hasta llegar a 10 */
for(let i = 0; i <= 10; i++) {
    console.log(`Numero:{i}`)
}

/* Saber si es par o impar */

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`${i} es IMPAR`);
    }
}



// FOR LOOP ***********************************************************************


const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

console.log( carrito.length);

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

/* Ejemplo para portfolio sicoiner? */
const portfolio = [
    {fecha: 20/01/2020, Ticker: "ETH", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
    {fecha: 20/01/2020, Ticker: "BTC", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
    {fecha: 20/01/2020, Ticker: "ADA", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
    {fecha: 20/01/2020, Ticker: "DOT", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
    {fecha: 20/01/2020, Ticker: "VRA", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
]

for(let i = 0; i < portfolio.length; i++) {
    console.log(`${portfolio[i].Ticker} - ${portfolio[i].cantidad} - ${portfolio[i].precioMedio} - ${portfolio[i].inversion} - ${portfolio[i].cotizacion} - ${portfolio[i].profit}`);
}


/* Detener un FOR LOOP cuando indiquemos una condición */
for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log(`${i} CINCO`);
        continue; // << Este encuentra el número pero sigue hacia el "else";
        break; // << Este detiene el proceso de búsqueda cuando encuentra cuando la condición se cumple        
    } 

    console.log(`Numero ${i}`);
}


/* Identificar que un producto tiene descuento */
const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

console.log( carrito.length);

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El artículo ${carrito[i].nombre} tiene Descuento`);
        continue; // << importante poner el continue para que continue la lista de productos
    }

    console.log(carrito[i].nombre);
}



// FIZZ BUZZ !!! PARA DETECTAR MÚLTIPLES DE 3 Y DE 5

for(let i = 0; i < 100; i++) {
    if(i % 15 === 0) {
        console.log(`${i} FIZZ BUZZ!!`)
    } else if(i % 3 === 0) {
        console.log(`${i} Fizz`)
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`)
    }
}


// WHILE WHILE WHILE ************************** **************************************** ******************************* *************
// WHILE WHILE WHILE ************************** **************************************** ******************************* *************
// WHILE WHILE WHILE ************************** **************************************** ******************************* *************

let i = 0; //inicializar el while

while(i < 10) { //condición

    console.log(`Número ${i}`)

    i++; //incremento
}

/* While como un for */

let i = 0; //inicializar el while

while(i < 10) { //condición

    if(i % 15 === 0) {
        console.log(`${i} FIZZ BUZZ!!`)
    } else if(i % 3 === 0) {
        console.log(`${i} Fizz`)
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`)
    }

    i++; //incremento
}






//DO WHILE DO WHILE ******************************** ****************************** *************************** *****************************
//DO WHILE DO WHILE ******************************** ****************************** *************************** *****************************
//DO WHILE DO WHILE ******************************** ****************************** *************************** *****************************
//DO WHILE DO WHILE ******************************** ****************************** *************************** *****************************

let i = 1000;

do {
    i++;
} while (i < 10);



// FOR EACH ******************************** ************************** ******************************* FOR EACH
// FOR EACH ******************************** ************************** ******************************* FOR EACH
// FOR EACH ******************************** ************************** ******************************* FOR EACH

// For each

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente) => {
    console.log(pendiente);
})

/* Reducido */
pendientes.forEach( pendiente => console.log(pendiente))

/* Varios parámetros */
pendientes.forEach( (pendiente, i) => {
    console.log(`${index} : ${pendiente}`);
})

/* Arreglo con objetos */
const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

carrito.forEach( (producto) => {
    console.log(producto.nombre)
})

/* Reducido */
carrito.forEach( producto => producto.nombre );

/* CON .map SÍ CREA UN NUEVO ARREGLO */
const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

const nuevoArreglo = carrito.map( producto => producto.nombre);

console.log(nuevoArreglo);



// FOR OF  *************************************************************************** FOR OF
// FOR OF  *************************************************************************** FOR OF
// FOR OF  *************************************************************************** FOR OF
/* En arreglo tradicional */
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for( let pendiente of pendientes ) {
        console.log(pendiente);
}


/* En arreglo con objetos */
const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

for( let producto of carrito) {
    console.log(producto.nombre);
}



// FOR IN FOR IN  *****************************************************************           FOR IN
// FOR IN FOR IN  *****************************************************************           FOR IN
// FOR IN FOR IN  *****************************************************************           FOR IN
/* En un arreglo */
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for( let pendiente of pendientes ) {
    console.log(pendiente);
}

/* En un objeto */
const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`)
}

/* Más nuevo */
for( let [llave, valor] of Object.entries(automovil)) {
    console.log(valor);
}



//ARRAY METODS ******************************************************************************************* ARRAY METODS
//ARRAY METODS ******************************************************************************************* ARRAY METODS
//ARRAY METODS ******************************************************************************************* ARRAY METODS
/* Métodos para arreglos */

/* Arreglo con índices */
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

/* Arreglo con objetos */
const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

/* .some Que al menos alguno de los producto cumpla la condición*/ 
/* Some con array metod */
const existe = carrito.some( producto => {
    return
})
/* Saber si enero existe */
meses.forEach((mes) => {
    if(mes === 'Enero') {
        console.log('Enero si existe')
    }
})
/* Con array metod */
const resultado = meses.includes('Enero');
console.log(resultado);


// FIND INDEX ***************************************************************************************  FIND INDEX
// FIND INDEX ***************************************************************************************  FIND INDEX
// FIND INDEX ***************************************************************************************  FIND INDEX

/* Encontrar el indice con findindex */
const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);



// PUNTO REDUCE ******************************************************************************** PUNTO REDUCE
// PUNTO REDUCE ******************************************************************************** PUNTO REDUCE
// PUNTO REDUCE ******************************************************************************** PUNTO REDUCE

const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

/* Saber el importe del carrito con foreach******************************************************************************* */
let total = 0;
carrito.forEach( producto => total += producto.precio)
console.log(total);


/* Saber el importe del carrito con reduce*******************************************************************************  resultado foreach*/
let resultado = carrito.reduce((total, producto) => total + producto.precio,  0 /*El cero es el indice que debe iniciar */);
console.log(resultado);


// FILTER ******************************************************************************** FILTER  IMPORTANTE PARA LAS BÚSQUEDAS
// FILTER ******************************************************************************** FILTER  IMPORTANTE PARA LAS BÚSQUEDAS
// FILTER ******************************************************************************** FILTER  IMPORTANTE PARA LAS BÚSQUEDAS
const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

let resultado;

/* Muestra todos los producto de más de 400 */
resultado = carrito.filter( producto => producto.precio > 400);
/* Muestra los productos que no sean Audífonos */
resultado = carrito.filter( producto => producto.nombre !=='Audifonos');
/* Muestra solo los audifonos */
resultado = carrito.filter(producto => producto.nombre === 'Audifonos');


console.log(resultado);



// **************************************************************************************************** FIND FIND
// **************************************************************************************************** FIND FIND
// **************************************************************************************************** FIND FIND
const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

/* Con un foreach */
let reslutado= '';
carrito.forEach((producto, i) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[i]
    }
})
console.log(resultado)

/* Con un .find */
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet' );
console.log(resultado2);


/* Video 91 */
//*************************************************************************************************** EVERY
//*************************************************************************************************** EVERY
//*************************************************************************************************** EVERY
/* EVERY: Todos y cada uno de los elementos deben cumplir la condición */

const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Alexa', precio: 90, descuento: true},
    {nombre: 'Teclado', precio: 30},
    {nombre: 'Consola', precio: 400},
    {nombre: 'Movil', precio: 200},    
]

const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado);





/* video 92 */


// ************************************************************************************************** CONCAT 

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];
const pendientes2 = ['Correr', 'Ir al parque'];
const pendientes3 = ['nadar', 'bicicleta'];

const juntos = meses.concat(pendientes, pendientes2, pendientes3);
console.log(juntos);


/* Con spread operator */
const juntos2 = [...pendientes, ...pendientes2, ...pendientes3];



/* Video 93 */
/* Ejemplo para portfolio sicoiner? */
const portfolio = [
    {fila:"1", fecha: 20/01/2020, Ticker: "ETH", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
    {fila:"2", fecha: 20/01/2020, Ticker: "BTC", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
    {fila:"3", fecha: 20/01/2020, Ticker: "ADA", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
    {fila:"4", fecha: 20/01/2020, Ticker: "DOT", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
    {fila:"5", fecha: 20/01/2020, Ticker: "VRA", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600 },
]

/* nueva operación creada */
const newRow = {fila:"6", fecha: 20/01/2020, Ticker: "VRA", cantidad: 2, precioMedio: 1300, inversion: 2600, cotizacion: 2600, profit: 2600} 

/* Orden para incluirla en el portofolio */
const addRow = [...portofolio, newRow];




// VIDEO 95

// TRABAJANDO EN EL DOM ***************************************************************************************** TRABAJANDO EN EL DOM ********************** * * * *
// TRABAJANDO EN EL DOM ***************************************************************************************** TRABAJANDO EN EL DOM ********************** * * * *
// TRABAJANDO EN EL DOM ***************************************************************************************** TRABAJANDO EN EL DOM ********************** * * * *
// TRABAJANDO EN EL DOM ***************************************************************************************** TRABAJANDO EN EL DOM ********************** * * * *

/* Acceder a la información de la web en la consola */

let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0].id;
elemento = document.forms[0],method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4].classList;

console.log(elemento);




// *****************************************************************************************  SELECCIONAR ELEMENTOS DEL DOM

/* Muestra todos los que encuentre */
const header = document.getElementsByClassName('header');
console.log(header);

/* Solo muestra el primero que encuentre */
const formulario = document.getElementById('formulario');
console.log(formulario);

/* Seleccionar por clase uno que está repetido pero se encuentra en la seguna fila - También permite buscar por ID o etiqueta #*/ 
const segundoCard = document.querySelector('section.hospedaje .card:ngt-child(2)');
console.log(segundoCard);


/* Seleccionar por clase uno que está repetido pero se encuentra en la seguna fila - También permite buscar por ID o etiqueta #*/ 
const segundoCard = document.querySelectorAll('mostrará todos, a diferencia de sin All');
console.log(segundoCard);


//video 100

// CONSULTAR EL CONTENIDO DE UN ELEMENTO EN EL HTML
const encabezado = document.querySelector('.contenido h1');
console.log(encabezado); //<< Mostrará el h1, que es hijo de div.contenido

/* Para ver lo que contiene */
console.log(encabezado.innerText); //<< No encontrará los elementos que tengas class hidden
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); //<< Muestra el código html del elemento
/* También se puede .texContent*/
const encabezado = document.querySelector('.contenido h1').textContent; 
console.log(encabezado); //<< Mostrará el h1, que es hijo de div.contenido

/* Modificar el contenido del html  ***************************************************************/
const encabezado = document.querySelector('.contenido h1');
console.log(encabezado); 

const nuevoHeading = 'Nuevo Heading';
document.querySelector('.contenido h1').textContent = nuevoHeading;

/* Modificar una IMAGEN **************************************************************** */
const imagen = document.querySelector('.card img');
imagen.src = 'img/imagen.jpg';


/* Video 101 */
// CAMBIAR EL CSS CON JAVASCRIPT ***********************************************************************  CAMBIAR EL CSS CON JAVASCRIPT

const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'toUpperCase';

/* Añadir una o varias clases */
encabezado.classList.add('nueva-clase', 'segund-clase');

/* eliminar una o varias clases */
encabezado.classList.remove('nueva-clase', 'segund-clase');


/* Video 102 */
/* *************************************************** Selector CHILDREN - SIGUIENTE Y ANTERIOR */
let portfolio = document.querySelector('.portfolio');
/* Modificar el texto */
portfolio.children[4].children[1].textContent = "Nuevo texto";
/* Modificar una imagen */
portfolio.children[4].children[1].src = "img/imagen.jpg";
/* Subir hacia el padre *********************** *************** SELECTOR PARENT*/
console.log(portfolio.parentElement.parentElement);
/* SELECCINAR HERMANOS *********************** *************** SELECCINAR HERMANOS*/
console.log(portfolio.nextElementSibling.nextElementSibling);
/* SELECCIONAR el anterior a la variable*********************** *************** SELECCIONAR el anterior a la variable*/
console.log(portfolio.previousElementSibling);
/* Seleccionar primero y último elemento de los hijos */
console.log(portfolio.firstElementChild);
console.log(portfolio.lastElementChild);


/* Video 103 */

// ELIMINAR ELEMENTOS ********************************************************************************* ELIMINAR ELEMENTOS
const primerEnlace = document.querySelector('a')
primerEnlace.remove();

/* Eliminar desde el padre */
const navegacion = document.querySelector('.menuNavegacion');
navegacion.removeChild( menuNavegacion.children[2]);



/* Video 104 **************************************************************************** video 104 bueno */
//GENERAR HTML CREAR HTML ************************************************************************************* GENERAR HTML CREATE ELEMENT
/* Generar un enlace */
let enlace = document.createElement('a');
enlace.textContent = 'Nuevo Enlace'; //<< Agregando el texto
enlace.href = '/nuevoEnlace'; //<<< agregando Enlace
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace')
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;
function miFuncion() {
    alert('Diste clic');
}
/* Seleccionar el destino del enlace */
let menuNavegacion = document.querySelector('.menuNavegacion');
menuNavegacion.appendChild(enlace);
/* Destino entre dos hijos */
let menuNavegacion = document.querySelector('.menuNavegacion');
menuNavegacion.insertBefore(enlace, menuNavegacion.children[1]); //<< (objeto, destino)


// CREAR UN CARD DE EJEMPLO ******************************************************************************* CREAR UN HTML

let parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria, tarjeta');

let parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo', 'h1');

let parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add = ('precio');
/* crear el div padre de los párrafos e incluirlos dentro */
const contenedorParrafos =  document.createElement('div');
contenedorParrafos.classList.add('info');
contenedorParrafos.appendChild(parrafo1)
contenedorParrafos.appendChild(parrafo2)
contenedorParrafos.appendChild(parrafo3)
/* Crear la imagen del artículo */
let imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
/* Crear el div padre y meter el html creado */
let padre = document.createElement('div');
padre.classList.add('padre');

padre.appendChild(imagen);
padre.appendChild(contenedorParrafos);

/* Insertar en el HTML */
let contenedor = document.querySelector('clase del contenedor para seleccionarlo');
contenedor.appendChild(padre);
/* Para insertarlo al princpio de los hijos del contenedor */
contenedor.insertBefore(padre.children[0]);




/* Video 105 */

// *********************************************************************************Uso de un botón que muestra footer
const btnFlotante = document.querySelector('.btn-flotante');
const footer =  document.querySelector('.footer');
/* Esta sería la sintaxis simple */
btnFlotante.addEventListener('click', () => {
    console.log('diste click en el botón')
});

/* Esta sería la sintaxix más avanzada */
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    console.log('diste click en el botón');
}

/* Un ejemplo de esta sintaxis finalizada en Sicoiner **************************************/
const newPortContainer = document.getElementById ('newPortContainer');
const btnNewPort = document.getElementById ('btnNewPort');
btnNewPort.addEventListener('click', mostrarModal);

function mostrarModal() {
    if( newPortContainer.classList.contains('off') ) {        
        newPortContainer.classList.remove('off');  
        newPortContainer.classList.add('on');
    } else {
        newPortContainer.classList.add('off');  
        newPortContainer.classList.remove('on');
    }
}

function ocultarModal() {
    if (newPortContainer.classList.contains('on') ) {
        newPortContainer.classList.remove('on');
        newPortContainer.classList.add('off');
    }
}


/* Video 106 */

// **********************************************************************  Detectar cuando el html está listo
/* Esta función solo se ejecutará cuando todo el documento esté cargado. */
document.addEventListener('DOMContentLoaded', () => {
    console.log('El documento está listo')
}) 

/* * ****** Eventos del ratón mouse */
const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseout', () => {
    console.log('Saliendo del nav');
})

nav.addEventListener('mousedown', () => {
    console.log('primer clic');
})

/* 
mouseup = cuando sueltas el mouse
dblclick = doble click
 */

/* Video 107 */
/* ***********************************   Eventos en el teclado */



/***************************************************************** Eventos para formularios */
/* Prevent default */
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('Buscando...');
    console.log(e.target.action); //muestra la acción de ese (e)
    console.log(e.target.method); //muestra los métodos del formulario
    console.log(e.target.action); // Cuál es su acción, a dónde va
} );

/* Validar formulario */

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
        
        console.log('Buscando...')
        console.log(e.target.action);
};



/* Video 110 */

// *************************************************************** Eventos en la ventana window */
// *************************************************************** Eventos en la ventana window */
// *************************************************************** Eventos en la ventana window */

/* Scroll */
//poner en consola window
window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;

    console.log(scrollPX);
})

/* Detectar cuando un elemento aparece en el scroll */
window.addEventListener('scroll', () => {

        const premium = document.querySelector('.premium');
        const ubicacionScroll = premium.getBoundingClientRect();

        console.log(ubicacionScroll);

        if(ubicacionScroll.top < 100) {
            console.log('El elemento ya está visible');
        } else {
            console.log('Aún no está visible, sigue haciendo scroll');
        }
})

/* video 111 */
// ******** evento se propaga, parar evento function *************************************************************** EVENT BUBBLING *****
const carDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

carDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en info');
});

titulo.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en titulo');
});



/* video 112 */

// **************************************************************                    *********************  Prevent Bubbling con DELEGATION

const carDiv = document.querySelector('.card'); //El contenedor de los elementos

carDiv.addEventListener('click', (e) => {
    console.log(e.target) // Para ver en consola dónde estamos haciendo click
    console.log(e.target.classList) // Para ver en consola qué clase tiene el elemento estamos haciendo click

    if(e.target.classList.contains('titulo')) {
        console.log('Diste clic en título')
    }

    if(e.target.classList.contains('precio')) {
        console.log('Diste clic en precio')
    }

    if(e.target.classList.contains('card')) {
        console.log('Diste clic en card')
    }
})


/* Video 113 */
// *********************************************************  Prevenir event bubbling con un métodos


//**********************************************************   FINAL DE LA TEÓRICA BÁSICA **************************************** !!!!!!!!!!
//**********************************************************   FINAL DE LA TEÓRICA BÁSICA ****************************************
//**********************************************************   FINAL DE LA TEÓRICA BÁSICA ****************************************
//**********************************************************   FINAL DE LA TEÓRICA BÁSICA **************************************** !!!!!!!!!!


//##########################################################        TEÓRICA RESUMIDA        ####################################################

//COMPARADORES
// == === != < > !==

//OPERADOR
console.log(typeof variable);

//FUNCIONES 
console.log(numero1 === parseInt(numero2)); // convierte un númmero string en número

//IF RESUMIDO
const autenticado = true;

if(autenticado === true) {
    console.log('Si puedes')
} else {
    console.log('No puedes')
}

//RESUMIDO
console.log(autenticado ? 'Si puedes' : 'No puedes');





// OBJETOS *********************************************************************************************      OBJETO
/* Esto no haría falta */
const nombre = 'blabalbla';
const precio = 300;
const disponible = true;

/* El objeto agrupa ya las variables */
const producto = {
    nombre : 'blabalbla',
    precio : 300,
    disponible : true,
    informacion : {
        peso: '1kg',
        medida: '1m'
    }
}

console.log(producto);


// Acceder a los valores del objeto
console.log(producto.nombre);
//Menos común
console.log(producto ['nombre']);
//Agregar propiedades al objeto
producto.imagen = "imagen.jpg";
//Eliminar propiedad al objeto
delete producto.disponible;

//Destructuring
//const {} = ;
const {nombre, precio, disponible, informacion, informacion:{peso, medida}} = producto;

// OBJECT METODS ****************************************************************************************** OBJECT Metods
// UNIR VARIOS objetos
const resultado = Object.assign(producto, medida);
//SPREAD Operator
const resultado2 = {...producto, ...medidas}



// Sintaxis function dentro de objeto   **********************************************   Sintaxis function dentro de objeto
const producto = {
    nombre : 'blabalbla',
    precio : 300,
    disponible : true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

producto.mostrarInfo()

//OBJECT CONSTRUCTOR ***********************************************************************  OBJECT CONSTRUCTOR
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const nuevoProducto = new Producto ( 'Televisión', 100);
const nuevoProducto2 = new Producto ('Monitor', 400);

console.log(nuevoProducto);
console.log(nuevoProducto2);

//Video 46 - 47
//Object.keys Y VALUES ************************************************************ ONJECT KEYS Y VALUES y entries
console.log(Object.keys(producto));
console.log(Object.values(producto));
console.log(Object.entries(producto));

//ARREGLOS *************************************************************************** ARREGLOS sólo tiene valores
const numeros = [1, 2, 3,];

//Objeto  tiene llave y valor
const producto = {
    nombre: 'valor',
    nombre: 'valor',
}

//Video 48
//Recorrer un arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//Añadir al arreglo ********************************************************
const portafolio = []

const operacion1 = {
    id: 'user_port_ticker1',
    tipo: 'compra',
    fecha: '15/05/2022',
    broker: 'BINANCE',
    ticker: 'ETH',
    cantidad: 1,
    precioCompra: 2000,
    inversion: 2000, // function sumar() {cantidad * precioCompra}?
    valorActual: 2500,
    profit: 500,
    profit_percent: 25
}

const operacion2 = {
    id: 'user_port_ticker2',
    tipo: 'compra',
    fecha: '15/05/2022',
    broker: 'BINANCE',
    ticker: 'ETH',
    cantidad: 1,
    precioCompra: 2000,
    inversion: 2000, //function sumar() {cantidad * precioCompra}?
    valorActual: 2500,
    profit: 500,
    profit_percent: 25
}

const operacion3 = {
    id: 'user_port_ticker3',
    tipo: 'compra',
    fecha: '15/05/2022',
    broker: 'BINANCE',
    ticker: 'ETH',
    cantidad: 1,
    precioCompra: 2000,
    inversion: 2000, //function sumar() {cantidad * precioCompra}?
    valorActual: 2500,
    profit: 500,
    profit_percent: 25
}


//Forma imperativa de añadir
/* portafolio.push(operacion1, operacion2);
console.log(portafolio); */

//Forma declarativa de añadir
let portafolioView;
portafolioView = [...portafolio, operacion1];
portafolioView = [...portafolioView, operacion2];
portafolioView = [...portafolioView, operacion3];

console.table(portafolioView);

//Eliminar último elemento del portafolio
portafolio.pop();
//Eliminar primer elemento del portafolio
portafolio.shift();
//Eliminar elemento por su posición en el portafolio carrito
portafolio.splice(3,1); // Eliminar posición 3, cantidad a eliminar 1

//Destructuring con Arreglos *************************************************************** DESTRUCTURING CON ARREGLOS 
const numeros = [10, 20, 30, 40,50]; // Arreglo
const [primero, segundo, tercero, cuarto, quinto] = numeros;
console.log(tercero);
//Seleccionar el tercero sin el resto
const [, , tercero, cuarto, quinto] = numeros;
console.log(tercero);
//Seleccionar sin estar los intermedios
const [, , tercero, ,quinto ] = numeros;
console.log(tercero);
//Seleccionar el resto a partir del tercero
const [, , ...tercero] = numeros;
console.log(tercero);


//for loop let i índices
for(let i = 0 ; i < carrito.length ; i++) {
    console.log(meses[i].nombre);
}

//for loop let i índices MÁS SENCILLO SOBRE UN ARREGLO
portofolio.forEach( function (filas) {
    console.log(`${filas.nombre} - Precio: ${filas.precio}`);
})


// Funcion sumar 
function sumar () {
    console.log(2 + 2);
}
sumar();


// ***********************************************************************  FUNCIONES


//Si no hay parámetros en una función sustituir por otra
function saluda(nombre = 'desconocido', apellido = 'desconocido') {
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar('Juan', 'De la torre');


// Video 116 Seleccionar etiqueta de un objeto seleccionado





























// Video 115 */
// CARRITO DE COMPRA