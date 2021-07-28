                <div class="ofertas row p-2 px-5 text-center justify-content-center azulFondo">
                    <!-- Aquí comienza el contenido -->
                    <div class="tarjetas px-2 my-3 col col-lg-9 col-xl-8 col-md-8 col-8 text-center rounded of-hidden mx-auto">                        
                        <div id="selectCalc">                            
                            <form class="d-flex justify-content-center op80">
                                <fieldset class="row">                                    
                                    <div class="mb-3 col p-3">
                                        <label for="disabledSelect" class="form-label text-light col">Portfolio:</label>
                                        <select id="disabledSelect" class="form-select col">
                                            <option>Seleccionar...</option>
                                            <option>Portfolio 1</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 col p-3">
                                        <label for="disabledSelect" class="form-label text-light col">Ticker:</label>
                                        <select id="disabledSelect" class="form-select col">
                                            <option>Seleccionar...</option>
                                            <option>ETH</option>
                                        </select>
                                    </div>
                                </fieldset>
                            </form>                            
                        </div>

                        <h1 class="text-light">alertas</h1>

                        <!-- Calculadora Cost Average -->
                        <?php
                            include "cost-average.php";
                        ?> 
                        <!-- Fin Calculadora Cost Average -->



                        <!-- Calculadora Coste de Inversión -->
                        <?php
                            include "calc-inversion.php";
                        ?> 
                        <!-- Fin Calculadora Coste de Inversión -->



                        <!-- Calculadora Colocación de órdenes -->
                        <?php
                            include "calc-orders.php";
                        ?> 
                        <!-- Fin Calculadora Colocación de órdenes -->      
                            
                    </div>
                    <!-- Aquí termina el portfolio -->
                </div>