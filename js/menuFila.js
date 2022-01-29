
//MENÚ DE CADA FILA DEL PORTAFOLIO * * * * * * * * * * * * * * * *
const portafolioLista = document.querySelector('#contIndex')
const editar = document.getElementById('editar');
const newOperacion = document.getElementById('newOperacion');
const promediar = document.getElementById('promediar');
const eliminar = document.getElementById('eliminar');

portafolioLista.addEventListener('click', menuFila)
portafolioLista.addEventListener('click', removeFila)
/* portafolioLista.addEventListener('click', menuPort) */
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
        filaSeleccionada.classList.add('bg-filaMenuOn')
        //Mostrar Menú
        menu.classList.remove('d-none')
        menu.classList.add('on')
    } else {   
        //Restaurar estilo de la filaSeleccionada             
        filaSeleccionada.classList.add('bg-filaMenuOff', 'px-5');
        filaSeleccionada.classList.remove('bg-filaMenuOn', 'px-5');      
        //Ocultar Menú
        menu.classList.add('d-none')
        menu.classList.remove('on')    
    }
}



function removeFila(e) {
    eliminarFila = e.target.parentElement.classList.contains('eliminar');
    filaPadre = e.target.parentElement.parentElement.parentElement.parentElement;
    if(eliminarFila) { 
        filaPadre.classList.add('bg-filaMenuRemove', 'op70')   
        setTimeout(() => {
            filaPadre.remove();
        }, 500);    
    }
}
