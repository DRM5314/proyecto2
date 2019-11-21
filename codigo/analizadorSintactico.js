var matrizEstados = [
    [-1, -1, -1, -1, -1, -1, '10', -1, '10', -1, '10', -1, -1, -1, '10', '16', '10', -1, -1, -1, '10'],//A0

    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, '6,{,),5,(,si', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],//B1

    [-1, -1, -1, -1, -1, -1, -1, -1, '8,;,),18,(,identificador', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],//C2

    [-1, -1, -1, -1, -1, -1, '8,;,),11,(,imprimir', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, '8,;,),11,(,imprimir', -1],//D3

    [-1, -1, -1, -1, -1, -1, -1, -1, '14,identificador,13', -1, -1, -1, -1, -1, '14,identificador,13', -1, -1, -1, -1, -1, -1],//F4

    [-1, -1, -1, -1, 'booleano', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],//H5

    [-1, -1, -1, -1, -1, -1, '9,},10', -1, '9,},10', -1, '9,},10', -1, '9,}', -1, '9,},10', -1, '9,},10', -1, -1, -1, '9,},10'],//I6

    [-1, -1, -1, -1, -1, -1, -1, -1, -1, '8,},8,{,sino', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],//J7

    [-1, -1, -1, -1, -1, -1, '10', -1, '10', -1, '10', -1, '#', - 1, '10', -1, '10', -1, -1, '#', '10'],//K8

    [-1, -1, -1, -1, -1, -1, '8', -1, '8', '7', '8', -1, '8', -1, '8', -1, '8', -1, -1, '8', '8'],//L9

    [-1, -1, -1, -1, -1, -1, '3', -1, '4', -1, '1', -1, -1, -1, '4', -1, '15', -1, -1, -1, '3'],//M10

    [-1, -1, -1, -1, -1, '12,cadena', '12,entero', '12,flotante', '12,identificador', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],//N11

    [-1, '#', '11,+', '#', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],//O12

    [-1, -1, -1, -1, -1, -1, -1, -1, '#', - 1, -1, -1, -1, -1, 'variable', -1, -1, -1, -1, -1, -1],//Q13

    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, '8,;,11,=', -1, -1, -1, -1, -1, -1, -1],//R14

    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, '8,},10,{,),5,(,mientras', -1, -1, -1, -1],//S15

    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, '20,},10,{,17,funcion', -1, -1, -1, -1, -1],//T16

    [-1, -1, -1, -1, -1, -1, -1, -1, '),18,(,identificador', -1, -1, -1, -1, -1, -1, -1, -1, 'principal', -1, -1, -1],//U17

    [-1, '#', -1, -1, '19,booleano', '19,cadena', '19,entero', '19,flotante', '19,identificador', -1, -1, -1, -1, -1, '19,variable', -1, -1, -1, -1, -1, -1],//V18

    [-1, '#', -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, '18', -1, -1],//W19

    [-1, -1, -1, -1, -1, -1, '8', -1, '8', -1, '8', -1, -1, -1, '8', '16', '8', -1, -1, '#', '8']//X20
];

var transiciones = ['(', ')', '+', ';', 'booleano', 'cadena', 'entero', 'flotante', 'identificador', 'sino', 'si', '{', '}', '=', 'variable', 'funcion', 'mientras', 'principal', ',', '$', 'imprimir'];

//matrizAceptada();
var entrada, contador = 0, posE = 0, posT = 0;
function posTransicion(entrada) {
    for (let i = 0; i < transiciones.length; i++) {
        if (entrada == transiciones[i]) return i;
    } return -1;
}
function esTerminal(caracter) {
    for (let i = 0; i < transiciones.length; i++) {
        if (caracter == transiciones[i]) return true;
    } return false;
}
function apilar(entrada, pilaActual) {
    var retorno = pilaActual;
    var entrada = entrada.split(',')
    for (let i = 0; i < entrada.length; i++) {
        retorno.push(entrada[i]);
    }
    return retorno;
}
function verificador9atriz() {
    for (let i = 0; i < matrizEstados.length; i++) {
        console.log(matrizEstados[i].length + '   matriz' + i);
    }
}
function matrizAceptada() {
    for (let i = 0; i < matrizEstados.length; i++) {
        console.log(matrizEstados[i].length + '  ' + i);
    }
    console.log(transiciones.length + 'transiciones');
}
//matrizAceptada();
function retornoMatriz(matrizSaltos) {
    var retorno = matrizSaltos.split(',');
    return retorno;
}
function analizarSintacticamente(matriz) {
    var nPila = new pila(), registroAnteriorPosicion, analizando, separadorSaltos, separadorComas, retorno;
    nPila.push('$');
    matriz = matriz + 'operador,' + '$,' + '$,' + '$';
    separadorSaltos = matriz.split('\n');
    if (separadorSaltos <= 0) { console.log('nada por analizar'); return; }
    while (nPila.size() > 0) {
        analizando = retornoMatriz(separadorSaltos[contador])[0];
        if (analizando == 'reservada') analizando = retornoMatriz(separadorSaltos[contador])[1];
        if (analizando == 'agrupacion' || analizando == 'signo' || analizando == 'operador') analizando = retornoMatriz(separadorSaltos[contador])[1];
        console.log('se analiza ' + analizando);
        posT = posTransicion(analizando);
        if (contador == 3) {
            console.log('llegue');
        }
        if (posE == '#') {
            // console.log('use lamda');
            posE = nPila.pop();
        }
        if (posE == '$') { break; }
        if (posT != -1) {
            if (posE != -1) {
                if (esTerminal(posE) && analizando == posE) {
                    contador++;
                    posE = nPila.pop();
                } else {
                    if (!esTerminal(posE)) {
                        registroAnteriorPosicion = posE;
                        posE = matrizEstados[posE][posT];
                        if (posE != -1) nPila = apilar(posE, nPila); else { break; }
                        posE = nPila.pop();
                    } else break;
                }
            } else { break; }
        } else { retorno += ('entrada no reconocida: ' + analizando); break; }
    }
    if (posE == '$') nPila.pop();
    if (nPila.size() == 0 && (separadorSaltos.length - contador) == 1) {
        retorno = ('sin error de sintaxis');
    } else {
        if (posE != -1) registroAnteriorPosicion = posE;
        retorno = ('error de sintaxis pos: (' + retornoMatriz(separadorSaltos[contador])[2] + ',' + retornoMatriz(separadorSaltos[contador])[3] + ' )\ntoken: ' + retornoMatriz(separadorSaltos[contador])[0] + ' \nLexema: ' + retornoMatriz(separadorSaltos[contador])[1] + ' \nse esperaba: ' + esperaba(registroAnteriorPosicion));
        console.log('en pose ' + posE);
        console.log('en recuperacion de ' + registroAnteriorPosicion);
    }
    document.getElementById('listado').innerText = retorno;
}
function esperaba(posicion) {
    var retorno = '';
    if (esTerminal(posicion)) return posicion; else if (posicion != -1) {
        var matriz = matrizEstados[posicion];
        for (let i = 0; i < matriz.length; i++) {
            if (matriz[i] != -1) {
                if (matriz[i].length > 1) {
                    matriz[i] = matriz[i].split(',');
                    for (let j = 0; j < matriz[i].length; j++) {
                        if (esTerminal(matriz[i][j])) retorno += '\n'+matriz[i][j]
                        
                        console.log(matriz[i][j]);
                    }
                } else {
                if(esTerminal(matriz[i]))retorno+=matriz[i];else retorno = 'Bloque de codigo';
                }
            }
        }
    }
    if (posicion == -1) retorno = ' No se esperaba nada ';
    return retorno;
}