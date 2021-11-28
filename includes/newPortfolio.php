        
<div id="newPortContainer" class="d-flex mx-auto z1 off">
    
    <div class="d-flex row col-9 h-100 m-auto align-content-center col-11 col-xl-8 col-sm-11">        
        <button id="cerrarNewPort" class="cerrarNewPort bg-none border-none d-flex justify-content-end text-light cursor pb-2"><h2 class="d-flex  justify-content-center align-content-center square azulFondo rounded-circle border-azul">X</h2></button>
        
        
        <div id="firstPortContain" class="d-flex row justify-content-center azul1 border-azul m-auto h-auto text-center text-light p-2 rounded">
           
            
            <span class="text-center"><h3 class="col p-2 text-center azulNoticias">Añadir nuevo Portfolio de Inversión</h3></span>
                
           

            <div class="d-flex justify-content-center col-6 p-3 my-4">
                <p class="row p-2 nowrap w-s">Nombre del Portfolio:</p>
                <input id="newNombre" class="row azul3 border-azul rounded text-center t-naranja" type="text">
            </div>
            
            <span class="m-3 row t-naranja" ><p>Registra el primer activo del Portfolio:</p></span>
            
            <div class="d-flex row justify-content-center w-100">
                <!--   Inpunts del activo -->                
                <div class=" d-flex justify-content-center col p-2">                    
                    <div>
                        <div id="newBroker" class="">Bróker</div>
                        <input class="azulLab rounded mx-2 text-dark text-center font-weight-bold p-2 border-azul" type="text">
                    </div>
                    <div>
                        <div id="newTicker" class="">Nombre</div>
                        <input class="azulLab rounded mx-2 text-dark text-center font-weight-bold p-2 border-azul" type="text">
                    </div>
                    <div>
                        <div id="newCantidad" class="">Cantidad</div>
                        <input class="azulLab rounded mx-2 text-dark text-center font-weight-bold p-2 border-azul" type="number">
                    </div>
                    <div>
                        <div id="newPrecioMedio" class="">Precio medio</div>
                        <input class="azulLab rounded mx-2 text-dark text-center font-weight-bold p-2 border-azul" type="number">
                    </div>                                     
                </div>
                <!--   Fin Inpunts del activo -->  
            </div>
            
            <div class="col d-flex justify-content-center h-auto mt-5">
                <div class="col text-center">
                    <button id="aceptarNewPort" class="px-2 btn-success p-2 m-2 rounded border-none">Aceptar</button>   
                    <button id="cerrarNewPort2" class="px-2 cerrarNewPort btn-danger p-2 m-2 rounded border-none">Cancelar</button>  
                </div>
            </div>
                      
        </div>         
                    
    </div>
</div>    
    

<div class="d-flex row justify-content-center align-items-center text-center mt-5">
    <!-- <h1 class="t-naranja mb-5">¡Bienvenid@!</h1> -->
   <h3 class="t-azul1 text-center">Pulsa el botón para crear tu primer Portfolio</h3>
    <!-- BOTÓN ABRIR PRIMER PORTFOLIO -->
    <button id="btnNewPort" type="button" class="btnNewPort btn btn-primary col-xl-2 col-sm-3 col-6 m-5 rounded p-2 border-naranja">
    <h4 class="">+</h4>
    </button>     
</div>