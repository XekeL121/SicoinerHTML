        
<div id="newPortContainer" class="newPortContainer d-flex mx-auto z2 bg-shadow off"> <!-- //Aquí se activa el modal, ponendo "on" -->
    
    <div class="d-flex row col-9  m-auto h-50 align-content-center col-12 col-xl-8 col-sm-11">        
        <button id="cerrarNewPort" class="cerrarNewPort bg-none border-none d-flex justify-content-end text-light cursor pb-2"><h3 class="d-flex justify-content-center align-content-center square bg-dark rounded-circle border-azul">X</h3></button>                
        <div id="modalNewPort" class="d-flex row justify-content-center col-12 azul1 border-azul m-auto h-auto text-center text-light p-2 rounded"> 
            <div class="nowrap superiorModal">
                <span class="text-center"><h3 class="azulNoticias col p-2 text-center text-light op80">Agregar Nuevo Portafolio</h3></span>

                <div class="d-flex justify-content-center my-4">

                    <div class="col-3"></div>

                    <div class="col-sm-6 col-12">
                        <h5 class="p-2 nowrap w-s t-naranja">Nombre del Portfolio:</h5>
                        <input id="newNombre" class="vacio azul3 border-azul rounded text-center text-light text-capitalize p-2 w-100" type="text" value="">
                    </div>

                    <div class="d-flex col-sm-3 col-12 mt-3">

                        <p class="col-12">Color del Nombre</p>

                        <div class="col-4">
                            <div class="">Azul</div>
                        </div>                        
                        <div class="col-4">
                            <div class="">Naranja</div>
                        </div>    
                        <div class="col-4">
                            <div class="">Verde</div>
                        </div>

                    </div> 

                </div>
            </div>               
                        
            <span class="m-3 row t-azul1" ><h4>Registra el primer activo para crear el Portfolio:</h4></span>            
            <div class="d-flex row justify-content-center w-100">

                <!--   Inpunts del activo -->                
                <div class="d-flex justify-content-center col p-2 w-75">                    
                    <div class="m-2">
                        <h5 class="t-naranja">Bróker</h5>
                        <input id="newBroker" class="vacio h-4 py-1 col-12 col-md-11 border-naranja azul2 rounded mx-2 text-light text-center text-uppercase" type="text">
                    </div>
                    <div class="m-2">
                        <h5 class="t-naranja">Ticker</h5>
                        <input id="newTicker" class="vacio h-4 py-1 col-12 col-md-11 text-uppercase border-naranja azul2 rounded mx-2 text-light text-center text-uppercase" type="text">
                    </div>
                    <div class="m-2">
                        <h5 class="t-naranja">Cantidad</h5>
                        <input id="newCantidad" class="vacio h-4 py-1 col-12 col-md-11 border-naranja azul2 rounded mx-2 text-light text-center" type="number">
                    </div>
                    <div class="m-2">
                        <h5 class="t-naranja">Precio medio</h5>
                        <input id="newPrecioMedio" class="vacio h-4 py-1 col-12 col-xl-11 border-naranja azul2 rounded mx-2 text-light text-center" type="number">
                    </div>                                     
                </div>
                <!--   Fin Inpunts del activo -->  
            </div>
            
            <div class="col d-flex justify-content-center h-auto mt-5">
                <div class="col text-center">
                    <button id="aceptarNewPort" type="submit" class="op-50 not-allowed px-2 btn-success p-2 m-2 rounded border-none">Aceptar</button>   
                    <button id="btnCancelNewPort" class="px-2 cerrarNewPort btn-danger p-2 m-2 rounded border-none">Cancelar</button>  
                    <!-- <a href="#" class="text-bottom">Limpiar texto</a> -->
                </div>
            </div>
                      
        </div>         
                    
    </div>
</div>    



    
