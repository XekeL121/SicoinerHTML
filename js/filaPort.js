//Opciones del menú de la fila del portfolio
const filaPort = {
    comprar: id => console.log(`Comprar ${id}`),
    vender: id => console.log(`Vender ${id}`),
    borrar: id => console.log(`Borrar ${id} de Portfolio1`)

   
}


filaPort.comprar('ETH')
filaPort.borrar('ETH')