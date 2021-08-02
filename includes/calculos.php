                <div class="ofertas row p-2 text-center justify-content-center azulFondo">
                    <!-- Aquí comienza el contenido -->
                    <div class="tarjetas my-3 row d-flex col-lg-9 col-xl-8 col-md-8 col-12 text-center rounded of-hidden mx-auto">                        
                        <div id="selectCalc" class="mt-2">                            
                            <form class="d-flex justify-content-center op80">
                                <fieldset class="row">                                    
                                    <div class="col p-3">
                                        <label for="disabledSelect" class="form-label text-light col">Portfolio:</label>
                                        <select id="disabledSelect" class="form-select col pl-2">
                                            <option>Seleccionar...</option>
                                            <option>Portfolio 1</option>
                                        </select>
                                    </div>
                                    <div class="col p-3">
                                        <label for="disabledSelect" class="form-label text-light col">Ticker:</label>
                                        <select id="disabledSelect" class="form-select col pl-2">
                                            <option>Seleccionar...</option>
                                            <option>ETH</option>
                                        </select>
                                    </div>
                                </fieldset>
                            </form>                            
                        </div>

                        <!-- Calculadora Coste de Inversión -->
                        <?php
                            include "calc-inversion.php";
                        ?> 
                        <!-- Fin Calculadora Coste de Inversión -->


                        
                        <!-- Calculadora Cost Average -->
                        <?php
                            include "cost-average.php";
                        ?> 
                        <!-- Fin Calculadora Cost Average -->  


                        <!-- Calculadora Colocación de órdenes -->
                        
                       <!-- Aquí iría calc-orders-php -->

                        <!-- Fin Calculadora Colocación de órdenes -->      
                            
                    </div>
                    <!-- Aquí termina el portfolio -->
                </div>