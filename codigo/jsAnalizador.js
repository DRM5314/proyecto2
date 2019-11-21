
//funcion que se exportara para ser usada en donde se necesite, como parametros el texto a analizar, la posicion de lo ultimo analizado y la posicion de la fila
function analizador(entrada, a, j) {
    entrada = entrada.toLowerCase();
    //variables que almacenaran lo que retorne cada funcion segun se opere
    var preservada, pidentificador, pentero, pflotante, poperador, pagrupacion, psigno, pcadena, pcomentario, pcaracter,tipo;
    //booleano que avisa a identificador que ya se tomo la cadena como reservada
    var reservadaa;
    //variable que retorna lo analizado
    var salida;
    let i = a;
    if (entrada.length > 0) {
        //cada entrada pondra falso antes de analizarce
        reservadaa = false;
        //alamcena ya sea la cadena que reconocio o falso
        preservada = analizadorReservada(entrada, i);
        if (preservada != false) {
            //salidaFinal servira para devolver un arreglo del tipo, lo analizado, posicion en fila y columna
            if(tokenSalida(preservada)== ('verdadero' || 'falso')) tipo = 'booleano';else tipo = 'reservada';
            salida = salidaFinal(tipo, tokenSalida(preservada), salidaPosicion(preservada), j);
            i = salidaPosicion(preservada);
            reservadaa = true;
        } else {
            pidentificador = analizadorIdentificador(entrada, i);
            if (pidentificador != false && !reservadaa) { salida = salidaFinal('identificador', tokenSalida(pidentificador), salidaPosicion(pidentificador), j); i = salidaPosicion(pidentificador); } else {
                pentero = analizadorNumeros(entrada, i);
                if (pentero != false) { salida = salidaFinal('entero', tokenSalida(pentero), salidaPosicion(pentero), j); i = salidaPosicion(pentero); } else {
                    pflotante = analizadorFlotante(entrada, i);
                    if (pflotante != false) { salida = salidaFinal('flotante', tokenSalida(pflotante), salidaPosicion(pflotante), j); i = salidaPosicion(pflotante); } else {
                        poperador = analizadorOperador(entrada, i);
                        if (poperador != false) { salida = salidaFinal('operador', tokenSalida(poperador), salidaPosicion(poperador), j); i = salidaPosicion(poperador) } else {
                            pagrupacion = analizadorAgrupacion(entrada, i);
                            if (pagrupacion != false) { salida = salidaFinal('agrupacion', tokenSalida(pagrupacion), salidaPosicion(pagrupacion), j); i = salidaPosicion(pagrupacion); } else {
                                psigno = analizadorSigno(entrada, i);
                                if (psigno != false) { salida = salidaFinal('signo', tokenSalida(psigno), salidaPosicion(psigno), j); i = salidaPosicion(psigno); } else {
                                    //si llego hasta aca es porque no es aceptado por ninguno de los anteriores estados y es reconocio como error                                    
                                    pcadena = analizadorCadena(entrada, i);
                                    if (pcadena != false) { salida = salidaFinal('cadena', tokenSalida(pcadena), salidaPosicion(pcadena), j); i = salidaPosicion(pcadena); } else {
                                        pcomentario = analizadoComentario(entrada, i);
                                        if (pcomentario != false) { salida = salidaFinal('comentario', tokenSalida(pcomentario), salidaPosicion(pcomentario), j); i = salidaPosicion(pcomentario); } else {
                                            pcaracter = analizadorCaracter(entrada, i);
                                            if (pcaracter != false) { salida = salidaFinal('caracter', tokenSalida(pcaracter), salidaPosicion(pcaracter), j); i = salidaPosicion(pcaracter); } else {
                                                salida = salidaFinal('Error',entrada[i],i,j);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return salida;
    }
}
