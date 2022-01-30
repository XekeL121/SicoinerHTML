
//MENÚ DE CADA FILA DEL PORTAFOLIO * * * * * * * * * * * * * * * *
const portafolioLista = document.querySelector('#contIndex')
const editar = document.getElementById('editar');
const newOperacion = document.getElementById('newOperacion');
const promediar = document.getElementById('promediar');
const eliminar = document.getElementById('eliminar');

portafolioLista.addEventListener('click', menuFila)

function menuFila(e) {
    btnMenuFila = e.target.classList.contains('btnMenuFilaPort');
    
    if(btnMenuFila) {        
        const filaSeleccionada = e.target.parentElement.parentElement;             
        //Abrir el menú
        
        //Poner que aparezca en un segundo de retraso
        setTimeout(() => {
            abrirMenu(filaSeleccionada);
        }, 50);
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

    //LEER EN QUÉ OPCIÓN SE DA CLIC DEL MENÚ
    menu.addEventListener('click', verOpcion);

    function verOpcion(e){
        //AL HACER CLIC SE CIERRA EL MENÚ
        menu.classList.add('d-none')
        menu.classList.remove('on') 

        //SI SE DA CLIC EN ELIMINAR, LLAMA A LA ACCIÓN FAQREMOVE
        if(e.target.parentElement.classList.contains('eliminar')) {
            faqRemoveFila(menu)            
        }
    }    
}

//FUNCIÓN DE ELIMINAR SI SE PULSA ELIMINAR EN EL MENÚ
function faqRemoveFila(menu) {

    //Seleccionando partes a usar en el faqRemove
    const filaPadre = menu.parentElement.parentElement;
    const ticker = filaPadre.querySelector('#ticker')
    const tickerName = ticker.textContent;
    /* console.log(ticker) */
    
    const faqRemove = document.createElement('div')
    faqRemove.classList.add('faqRemove', 'bg-shadow', 'd-flex', 'row', 'w-100', 'h-100', 'justify-content-center', 'align-items-center', 'mx-auto', 'position-fixed')
    faqRemove.innerHTML = `<div class="azul3 col-6 rounded p-5 border-azul">
    <div class="d-flex justify-content-center">
    <h3 class="text-light text-center">¿Eliminar fila de <span class="text-uppercase t-naranja">${tickerName}</span>?</h3>
    </div>
    <div class="d-flex justify-content-center m-2">
    <button id="aceptar" class="m-2 p-2 btn btn-success">Aceptar</button>
    <button id="cancelar" class="m-2 p-2 btn btn-danger">Cancelar</button>
    </div>
    </div>
    `;
    contIndex.appendChild(faqRemove);
    const menuRemove = menu;       
    menuRemove.classList.add('d-none');
    menuRemove.classList.remove('on');
    const aceptar = faqRemove.querySelector('#aceptar');
    aceptar.addEventListener('click', remove);

    function remove(){
        filaPadre.classList.add('bg-filaMenuRemove', 'op70');
        faqRemove.classList.add('off')
        faqRemove.remove();

        setTimeout(() => {
            filaPadre.remove();
        }, 500);
        
    }
}