
//MENÚ DE CADA FILA DEL PORTAFOLIO * * * * * * * * * * * * * * * *
const portafolioLista = document.querySelector('#contIndex')

portafolioLista.addEventListener('click', menuFila)
/* portafolioLista.addEventListener('click', menuPort) */
portafolioLista.addEventListener('click', addActivo)
/* portafolioLista.addEventListener('click', cerrarMenu) */

function menuFila(e) {
    btnFila = e.target.classList.contains('btnMenuFilaPort');
    
    if(btnFila) {        
        const filaSeleccionada = e.target.parentElement.parentElement;             
        //Abrir el menú
        abrirMenu(filaSeleccionada);
        //Poner que aparezca en un segundo de retraso
    }
}

function abrirMenu(filaSeleccionada) {
    //Seleccionar el menú
    const menu = filaSeleccionada.querySelector('ul')

    if(menu.classList.contains('d-none')) {
        //Cambiar estilo de la filaSeleccionada
        filaSeleccionada.classList.remove('bg-filaMenuOff');
        filaSeleccionada.classList.add('bg-filaMenuOn', 'border-filaMenuOn')
        //Mostrar Menú
        menu.classList.remove('d-none')
        menu.classList.add('on')
    } else {   
        //Restaurar estilo de la filaSeleccionada             
        filaSeleccionada.classList.add('bg-filaMenuOff', 'px-5');
        filaSeleccionada.classList.remove('bg-filaMenuOn', 'border-filaMenuOn', 'px-5');      
        //Ocultar Menú
        menu.classList.add('d-none')
        menu.classList.remove('on')    
    }
}


 


//Botón añadir activo al portofolio
function addActivo(e){
    btnAddActivo = e.target.parentElement.classList.contains('addActivo');
    if(btnAddActivo){
        
        portSeleccionado = e.target.parentElement.parentElement.parentElement;
        console.log(portSeleccionado)
        HTMLfila()
    }
    /* btnAnadir = e.target.parentElement.classList.contains('añadirActivo') */
}