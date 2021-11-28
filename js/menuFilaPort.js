let btnMenuFilaPort = document.querySelector('.btnMenuFilaPort');
let menuFilaPort = document.querySelector('#menuFilaPort');

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
        /* menuFilaPort.classList.remove('on'); 
        menuFilaPort.classList.add('off');   */ 
        ocultarMenu()         
        this.classList.remove('op50');             
    }
}


document.body.addEventListener('click', ocultarMenu, true);

function ocultarMenu() {    
    console.log('click en Ocultar menu fila port')
    menuFilaPort.classList.remove('on'); 
    menuFilaPort.classList.add('off');   
}



























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
