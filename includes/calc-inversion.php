                        <h4 class="mt-3 mb-2 text-light">Cálculo de inversión simple:</h4>
                        <!-- <hr class="text-light mx-auto rounded bg-white opacityOff"> -->

                        <div ng-app="" class="d-flex col-10 col-md-10 p-3 azul2 rounded space-between justify-content-center align-items-center op80 mx-auto">
                            
                            <div class="calcCost text-light col-4">
                                <h5>Cantidad</h5>
                                
                                <input class="w-75 rounded mb-3 mt-2 text-center cursor-pointer text-bold" type="number" ng-model="n1">
                            </div>
                            <div class="calcCost text-light col-4">
                                <h5>Precio Compra</h5>
                                
                                <input class="w-75 azulLogo2 text-light rounded mb-3 mt-2 text-center cursor-pointer" type="number" ng-model="n2">
                            </div>
                            <div class="calcCost text-light col-4">
                                <h5>Total Inversión</h5>
                                
                                <input class="w-75 rounded mb-3 mt-2 text-center text-green azulLogo2 text-bold" type="number" value='{{n1*n2}}'>
                            </div>
                        </div>