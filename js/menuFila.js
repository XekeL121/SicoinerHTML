
const portafolioLista = document.querySelector('#contIndex')
//MENÚ DE CADA FILA DEL PORTAFOLIO * * * * * * * * * * * * * * * *
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

        //Si se da clic en Aceptar, pregunta previamente
        if(e.target.parentElement.classList.contains('eliminar')) {

            e.preventDefault();
            faqRemoveFila(menu) //! Esta parte parece crashear cuando se hace click primero en promediar por ejemplo   
        }   
    }    
}

//FUNCIÓN DE ELIMINAR SI SE PULSA ELIMINAR EN EL MENÚ
function faqRemoveFila(menu) {

    //Seleccionando partes a usar en el faqRemove
    const filaPadre = menu.parentElement.parentElement;
    const ticker = filaPadre.querySelector('#ticker')
    const tickerName = ticker.textContent;
    /* console.log() */
    
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
    const cancelar = faqRemove.querySelector('#cancelar');
    aceptar.addEventListener('click', remove);
    cancelar.addEventListener('click', cerrarRemove);

    function cerrarRemove(e) {
        faqRemove.remove()

        setTimeout(() => {
            
            filaPadre.classList.remove('bg-filaMenuOn', 'px-5')
            filaPadre.classList.add('bg-filaMenuOff')
        }, 200);
    }
    
    function remove(){
        filaPadre.classList.add('bg-filaMenuRemove', 'op70');
        faqRemove.classList.add('off')
        faqRemove.remove();
        //Elimina la fila tras unos milisegundos para dar sensación mecánica
        setTimeout(() => {
            filaPadre.remove();
        }, 500);        
        

        //Al eliminar una fila, necesitamos crear un nuevo Total
        const bodyPort = filaPadre.parentElement;
        const totalPorta = bodyPort.querySelector('.totalPorta');
        
        
        //Este código maqueta un nuevo total al portofolio para contabilizar el número de filas
        const filasNum = bodyPort.getElementsByClassName('filaPort');
        const filasTotal = filasNum.length - 1;
        
        const newFilasTotal = document.createElement('tr');
        newFilasTotal.classList.add('totalPorta', 'azul5', 'd-flex', 'text-center', 'nowrap');
        newFilasTotal.innerHTML = `
        
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalActivos col w-s text-light nowrap">${filasTotal} Activos</th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalInvertido col w-s text-light nowrap">&nbsp </th>
        <th id="" class="col w-s text-light nowrap"></th>
        <th id="" class="totalProfit col w-s nowrap text-light"> &nbsp300,000 | 300%</th>
        <th id="" class="col w-s text-light cursor"><img class="newTicker" src="images/add_box_white_24dp.svg" alt=""></th>
        `;
        
        //Timing con eliminar fila, aquí se elimina el antiguo total y se añade el nuevo.
        setTimeout(()=> {

            totalPorta.remove();
            
            bodyPort.appendChild(newFilasTotal);
             
          }, 500);
            


        //************
        
    }
}

