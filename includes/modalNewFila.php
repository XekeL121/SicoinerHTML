<!-- //HTML DE AÑADIR NUEVA FILA AL PORTFOLIO -->

<div id="modalNewFila" class="modalNewFila d-flex mx-auto z2 bg-shadow off"> <!-- //Aquí se activa el modal, ponendo "on" -->
    
    <div class="d-flex row col-9  m-auto h-50 align-content-center col-12 col-xl-8 col-sm-11">        
        <button id="cerrarNewFila" class="cerrarNewFila bg-none border-none d-flex justify-content-end text-light cursor pb-2"><h3 class="d-flex justify-content-center align-content-center square bg-dark rounded-circle border-azul">X</h3></button>                
        <div id="" class="d-flex row justify-content-center col-12 azul1 border-azul m-auto h-auto text-center text-light p-2 rounded">             
                        
            <span class="m-3 row t-azul1" ><h4>Nuevo activo:</h4></span>            
            <div class="d-flex row justify-content-center w-100">

                <!--   Inpunts del activo -->                
                <div class="d-flex justify-content-center col p-2 w-75">                    
                    <div class="m-2">
                        <h5 class="t-naranja">Bróker</h5>
                        <input id="brokerFila" class="vacio h-4 py-1 col-12 col-md-11 border-naranja azul2 rounded mx-2 text-light text-center text-uppercase" type="text">
                    </div>
                    <div class="m-2">
                        <h5 class="t-naranja">Ticker</h5>
                        <input id="tickerFila" class="vacio h-4 py-1 col-12 col-md-11 text-uppercase border-naranja azul2 rounded mx-2 text-light text-center text-uppercase" type="text">
                    </div>
                    <div class="m-2">
                        <h5 class="t-naranja">Cantidad</h5>
                        <input id="cantidadFila" class="vacio h-4 py-1 col-12 col-md-11 border-naranja azul2 rounded mx-2 text-light text-center" type="number">
                    </div>
                    <div class="m-2">
                        <h5 class="t-naranja">Precio medio</h5>
                        <input id="precioMedioFila" class="vacio h-4 py-1 col-12 col-xl-11 border-naranja azul2 rounded mx-2 text-light text-center" type="number">
                    </div>                                     
                </div>
                <!--   Fin Inpunts del activo -->  
            </div>
            
            <div class="col d-flex justify-content-center h-auto mt-5">
                <div class="col text-center">
                    <button id="aceptarNewFila" type="submit" class="op-50 not-allowed px-2 btn-success p-2 m-2 rounded border-none">Aceptar</button>   
                    <button id="btnCancelNewFila" class="px-2 btnCancelNewFila btn-danger p-2 m-2 rounded border-none">Cancelar</button>  
                    <!-- <a href="#" class="text-bottom">Limpiar texto</a> -->
                </div>
            </div>
                      
        </div>         
                    
    </div>
</div>    