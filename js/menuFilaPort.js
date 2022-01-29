//MOSTRAR Y OCULTAR EL MENÚ DE LA FILA DEL PORTFOLIO

let btnMenuFilaPort = document.querySelector('.btnMenuFilaPort');
/* let menuFilaPort = document.getElementById('menuFilaPort'); */

//Acción de activar el menú
btnMenuFilaPort.addEventListener('click', mostrarOcultarMenu);



function mostrarOcultarMenu() {
    if( menuFilaPort.classList.contains('off') ) {
        console.log('if')
        menuFilaPort.classList.remove('off');  
        menuFilaPort.classList.add('on');            
        this.classList.add('op50');       
        

    } else {
        console.log('else')
        menuFilaPort.classList.remove('on'); 
        menuFilaPort.classList.add('off');   
       /*  ocultarMenu1()  */        
        this.classList.remove('op50');             
    }
}


//Acción click fuera del menú NECESITA SOLUCIÓN NO FUNCIONA DE MOMENTO
/* document.menuFilaPort.addEventListener('click', mostrarOcultarMenu, false); */

//Acción click fuera del menú NECESITA SOLUCIÓN NO FUNCIONA DE MOMENTO
/* document.menuFilaPort.addEventListener('click', ocultarMenu1, false); */





//Acción click fuera del menú NECESITA SOLUCIÓN NO FUNCIONA DE MOMENTO
/* menuFilaPort.addEventListener('click', ocultarMenu1); */

/* function ocultarMenu1() {
    if(menuFilaPort.clickOutsideThisElement) {
        console.log('else')
        mostrarOcultarMenu()   
    }
}
 */



/* $(document).on("click",function(e) {
                    
    let container = menuFilaPort;
                       
       if (!container.is(e.target) && container.has(e.target).length === 0) { 
          alert("¡Pulsaste fuera!");               
       }
}); */

//PARA QUE EL MENÚ SE OCULTE AL HACER CLIC FUERA (Quizá se necesite mejorar esta parte ya que cada clic registra esta función en la página portfolios)
/* document.body.addEventListener('click', ocultarMenu, true);

function ocultarMenu() {    
    console.log('click en Ocultar menu fila port');
    menuFilaPort.classList.remove('on'); 
    menuFilaPort.classList.add('off');   
    btnMenuFilaPort.classList.remove('op50');
} */



























/* 

let btnMenuFilaPort = document.querySelector('.btnMenuFilaPort');
let menuFilaPort = document.querySelector('#menuFilaPort');

//Acción de activar el menú
btnMenuFilaPort.addEventListener('click', mostrarOcultarMenu => {

    

    if(mostrarOcultarMenu.target.classList.contains('btnMenuFilaPort')) {

        
        menuFilaPort.classList.remove('off');  
        menuFilaPort.classList.add('on');            
        btnMenuFilaPort.classList.add('op50');              

    } else {
        console.log('click fuera')
        
        menuFilaPort.classList.remove('on'); 
        menuFilaPort.classList.add('off');            
        btnMenuFilaPort.classList.remove('op50');             
    }
});
 */



/* 
let filaPort = document.querySelector ('#filaPort');

cargarEventListener();
function cargarEventListener () {
    filaPort.addEventListener('click', abrirMenu);
}

function abrirMenu (e) {
    if(e.target.querySelector.indexOf('.btnMenuFilaPort')) {
        menuFilaPort.classList.remove('on'); 
        menuFilaPort.classList.add('off');            
        btnMenuFilaPort.classList.remove('op50');
      
       
    } else{
        menuFilaPort.classList.remove('on'); 
        menuFilaPort.classList.add('off');            
        this.classList.remove('op50'); 
        console.log ('cerrando');
    }
 

} */
