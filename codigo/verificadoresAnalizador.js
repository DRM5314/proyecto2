
    function verificadorCaracter(arreglo, caracter) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] == caracter) {
                return true;
            }
        }
    }
    //funcion que representa las transiciones de una palabra recervada, recibinedo el texto completo y posicion ultima analizada
    
    //recibe como parametro la entrada de lo que se concateno mas una coma y la posicion en que se encuentra actualmente
    function salidaPosicion(texto) {
        let retorno = texto;
        //separa el texto de la coma y solo retorna la posicion que se recibio en el texto
        let salida = retorno.substring(retorno.indexOf(',') + 1, retorno.length);
        return salida;
    }
    //recibe como parametro un texto que viene con lo concatenado, una coma y la posicion en que se encuntra
    function tokenSalida(texto) {
        //desde la posicion inicial osea 0 hasta la primer coma se encuentra el lexema o token
        let salida = texto.substring(0, (texto.indexOf(',')));
        return salida;
    }
    //recibe el texto, la posicion acual, el tipo y el numero de fila que ecuentra para retornalo como un arreglo
    function salidaFinal(tipo, token, posicion, j) {
        let retorno = [tipo, token, j, posicion];
        return retorno;
    }
