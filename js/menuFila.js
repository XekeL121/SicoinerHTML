const portafolioLista = document.querySelector('#contIndex')
//MENÚ DE CADA FILA DEL PORTAFOLIO * * * * * * * * * * * * * * * *
const editar = document.getElementById('editar');
const newOperacion = document.getElementById('newOperacion');
const promediar = document.getElementById('promediar');
/* const eliminar = document.getElementById('eliminar'); */


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
    //Clic en ELIMINAR
    menu.addEventListener('click', eliminar);

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
    

    function eliminar(e) {
        e.preventDefault();
        const btnEliminar = e.target.parentElement.classList.contains('eliminar')
        
        if(btnEliminar) {            
            limpiarHTML();
            menu.classList.add('d-none')  
            menu.classList.remove('on')
            let filaPadre = menu.parentElement.parentElement;
            const ticker = filaPadre.querySelector('#ticker')
            const tickerName = ticker.textContent;

            const faqRemove = document.createElement('div')
            faqRemove.classList.add('faqRemove', 'bg-shadow', 'd-flex', 'row', 'w-100', 'h-100', 'justify-content-center', 'align-items-center', 'mx-auto', 'z2', 'position-fixed')
            faqRemove.innerHTML = `<div class="azul1 col-6 rounded p-5 border-azul">
            <div class="d-flex justify-content-center">
            <h3 class="text-light text-center">¿Eliminar <span class="text-uppercase t-naranja">${tickerName}</span>?</h3>
            </div>
            <div class="d-flex justify-content-center m-2">
            <button id="aceptar" class="m-2 p-2 btn btn-success">Aceptar</button>
            <button id="cancelar" class="m-2 p-2 btn btn-danger">Cancelar</button>
            </div>
            </div>
            `;

            contIndex.appendChild(faqRemove);
        }

        //Este código evita que al abrir el faqRemove, éste se duplique la próxima vez debido al appendChild
        function limpiarHTML() {      
            const faqRemove = document.getElementsByClassName('faqRemove');
            while(faqRemove.length > 0) {                                
                const faqRemove = document.querySelector('.faqRemove')
                faqRemove.remove()          
                return;
            }   
        }

        const aceptar = document.querySelector('#aceptar');
        aceptar.addEventListener('click', remove);
        const cancelar = document.querySelector('#cancelar');
        cancelar.addEventListener('click', cerrarRemove);
        
        //Elimina la fila y a continuació crea un nuevo total
        function remove(){
            
            const faqRemove = document.querySelector('.faqRemove')
            faqRemove.remove()
            let filaPadre = menu.parentElement.parentElement;
            filaPadre.classList.add('op70', 'bg-rojo');            

            //Elimina la fila tras unos milisegundos para dar sensación mecánica
            setTimeout(() => {
                filaPadre.remove();
            }, 1000);        
            
    
            //Al eliminar una fila, necesitamos crear un nuevo Total
            const bodyPort = filaPadre.parentElement;
            const totalPorta = bodyPort.querySelector('.totalPorta');
            
            
            //Este código maqueta un nuevo total al portofolio para contabilizar el número de filas
            //Contabilizando filas
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
            <th id="" class="totalProfit col w-s text-light"> &nbsp300,000 | 300%</th>
            <th id="" class="col w-s text-light cursor"><img class="newTicker" src="images/add_box_white_24dp.svg" alt=""></th>
            `;
            
            //Timing con eliminar fila, aquí se elimina el antiguo total y se añade el nuevo.
            setTimeout(()=> {
    
            totalPorta.remove();
            
            bodyPort.appendChild(newFilasTotal);
                
            }, 1000);                
        }

        //Cerrar la ventana faqRemove
        function cerrarRemove() {
            const faqRemove = document.querySelector('.faqRemove')
            faqRemove.remove()
            limpiarHTML();
            setTimeout(()=> {
                const filaUp = document.querySelector('.bg-filaMenuOn')
                filaUp.classList.remove('bg-filaMenuOn');
                filaUp.classList.add('bg-filaMenuOff');
            }, 1000);  
            /* let filaOn = document.getElementsByClassName('bg-filaMenuOn')
            filaPadre.classList.remove('bg-filaMenuOn')
            filaPadre.classList.add('bg-filaMenuOff') */
            
        }
    }        
}


 //Contabilzando inversión Total
/* portafolioLista.addEventListener('click', invertidoTotal)
function invertidoTotal(e){
    const totalBar = e.target.classList.contains('totalInvertido ');
    const bodyPortfolio = e.target.parentElement.parentElement;
    const filasPort = bodyPortfolio.querySelectorAll('.filaPort')
    console.log(filasPort)
} */


function totales(){
    const totales = document.getElementsByClassName('.totalInvertido')

    console.log(totales)
}
totales();