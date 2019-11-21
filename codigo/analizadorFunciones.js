
/*funcion que recibe un arreglo y un caracter, el arreglo son los estados y el caracter es lo que se 
esta buscando, si pertece a un estado retorna verdadero y rompera el ciclo, sino retornara falso*/
function analizadorReservada(texto, a) {
    //variable que retorna el arreglo solicitado quitando las comas
    let separador = ((fase) => { return fase.split(',') });
    /*variable que retorna el caracter especifico que fue aceptado en dicho estado ya que cada estado
    de una reservada contiene distintos movimentos en caracteres */
    let aceptado = ((cadena, caracter) => { for (let c = 0; c < cadena.length; c++) { if (cadena[c] == caracter) return cadena[c]; } });
    let aceptaciones = "si,sino,hacer,falso,cadena,entero,decimal,mientras,staticiable,booleano,verdadero,funcion,principal,retornar,vacio,caracter,para,imprimir,variable";
    //variable que contiene un arreglo de concatenacion de caracteres para saber las palabras reservadas
    var reservadas = separador(aceptaciones);
    //variable que servira para retorno de concatenacion de caracteres analizados
    var flotante = "", entrada = a;
    //variable la cual comenzara en la posicion que entre el texto 
    let i = a;
    //arreglo de las fases totales para palabras reservadas
    let fases = [fase1, fase2, fase3, fase4, fase5, fase6, fase7, fase8, fase9];
    for (i; i < texto.length; i++) {
        if ((i - entrada) < fases.length && verificadorCaracter(fases[i - entrada], texto[i])) {
            flotante += aceptado(fases[i - entrada], texto[i]);
        } else { break; }
    }
    //se compara cadena con cadena, la cadena de reservadas, y cadena analizada por las transiciones cumpiendo cada movimiento en los estados        
    for (let j = 0; j < reservadas.length; j++) {
        //si lo siguiente es distinto de numero y igual a una cadena de reservadas y distinto de letras entonces es aceptado como reservada y reotorna lo concatenado
        if (!verificadorCaracter(fase11.split(','), texto[i]) && flotante == reservadas[j] && !verificadorCaracter(fase10.split(','), texto[i])) return flotante + ',' + (i - 1);
    } return false;
}
//funcion que analiza si se obtiene un identificador, recibiendo el texto completo y la posicion ultina que se analizo
function analizadorIdentificador(texto, a) {
    //variable para concatenar y posicionar la entrada
    let flotante = "", i;
    //verifica que no sea vacio o nulo
    if (texto != "" && texto != null) {
        //separa el abecedario de las comas
        let fase101 = fase10.split(",");
        //verifica si el inicio pertenece al abecedario
        if (verificadorCaracter(fase101, texto[a])) {
            //si pertenece verifica luego si lo siguiente es letras o numeros y concatena
            for (i = a; i < texto.length; i++) {
                if (verificadorCaracter(fase101, texto[i])) flotante += texto[i]; else {
                    let fase11s = fase11.split(",");
                    if (verificadorCaracter(fase11s, texto[i])) flotante += texto[i]; else return flotante + ',' + (i - 1);
                }
            }
        } else return false;
    } return flotante + ',' + (i - 1);
}
//funcion que analiza a los numeros funcionando de manera igual a las anteriores
function analizadorNumeros(texto, a) {
    let fase11s = fase11.split(",");
    let flotante = "", i = a;
    for (i; i < texto.length; i++) {
        //si pertenece a los numeros concatena sino y lo siguite es distinto de punto o letras sera tomado como error hasta lo siguiente
        if (verificadorCaracter(fase11s, texto[i])) flotante += texto[i]; else { if (flotante.length > 0 && texto[i] != '.' && !verificadorCaracter(fase10, texto[i])) return flotante + ',' + (i - 1); else return false; }
    } if (a == flotante.length) return false;//si lo concatenado es igual a la posicion de entrada entonces no analizo ningun numero y sale retornando falso
    //retornara ya que si existese un error entonces antes hace retornar falso y rompe el ciclo
    return flotante + ',' + (i - 1);
}
//analiza todo el texto hasta que ya no acepte alguno de los caracteres
function analizadorFlotante(texto, a) {
    let i, flotante = "", j;
    for (i = a; i < texto.length; i++) {
        //verifica que lo inicial sea un numero o mas de lo contrario verifica si existe un punto y rompe sino reorna falso
        if (verificadorCaracter(fase11.split(','), texto[i])) flotante += texto[i]; else {
            //al no detectar un numero entonces mira si es un punto y rompe para seguir analizando lo siguiente si no es ni numero ni punto entonces retorna falso
            if (texto[i] == '.') break; else return false;
        }
    }
    //verifica si aun hay mas caracteres
    if ((i + 1) != texto.length) i++;
    //verifica que lo que sigue sean numeros, la posicion [i-2] es para verificar que antes del punto sea digito
    if (verificadorCaracter(fase11.split(','), texto[i]) && verificadorCaracter(fase11.split(','), texto[i - 2])) {
        //concatena el punto y el numero siguiente
        flotante += texto[i - 1], flotante += texto[i];
        for (j = (i + 1); j < texto.length; j++) {
            if (verificadorCaracter(fase11.split(','), texto[j])) flotante += texto[i]; else {
                //verifica que no venga ninguna letra o punto demas
                if (verificadorCaracter(fase10.split(','), texto[j]) || texto[j] == '.') return false; else return flotante + ',' + (j - 1);
            }
        }
        return flotante + ',' + (j - 1);
    } else return false;
}
//analiza los estados de operdor recibinedo el texto completo y la posicion ultima analizada
function analizadorOperador(texto, o) {
    let a = o, flotante = "";
    let verificador = (() => { if (a <= texto.length) a++; return true; });
    if(texto.length>2 && texto[a]=='/'&&texto[a+1]=='/')return false;
    if (texto[a] == fase13) {
        flotante += texto[a];
        //verifica que hayan mas caracteres y que pueda moverse al siguiente estado
        if (verificador() && verificadorCaracter(fase14, texto[a])) {
            flotante += texto[a] + ',' + a;
            return flotante;
        } else return flotante + ',' + (a - 1);//se resta 1 ya que operador() suma uno y sino entra entonces debe restarle
    } else if (verificadorCaracter(fase15, texto[a])) {
        if (texto[a] == '/') {
            if ((a < texto.length) && texto[(a + 1)] != '*') return texto[a] + ',' + a; else return false;

        }
        return texto[a] + ',' + a;
    } else return false;
}
//recibe el texto y posicion ultima analiza, funcion que verifica los signos de agrupacion
function analizadorAgrupacion(texto, a) {
    if (verificadorCaracter(fase12.split(','), texto[a])) return texto[a] + ',' + (a); else return false;
}
//funcion que analiza los signos que son " y ,
function analizadorSigno(texto, a) {
    if (verificadorCaracter(fase16.split(','), texto[a])) return texto[a] + ',' + (a); else return false;
}
function analizadorCadena(texto, o) {
    let a = o, flotante = '';
    if (texto[a] == fase17) {
        flotante += texto[a];
        for (let i = (a + 1); i < texto.length; i++) {
            if (texto[i] == fase17) return false;
            flotante += texto[i];
            a = i;
            if (texto[i] != fase18 && texto[i + 1] == fase18 && flotante.length > 1) {
                flotante += texto[i + 1];
                return flotante + ',' + (i + 1);
            }
        }
    } return false;
}
function analizadorCaracter(texto, o) {
    let a = o, flotante = '';
    let verificadorTamano = (() => { if (a < texto.length) { a++; return true; } else return false; });
    if (texto[a] == fase19) {
        flotante += texto[a];
        if (verificadorTamano() && texto[a] != '' && texto[a] != ' ' && texto[a] != fase20 && texto[a] != fase19) {
            flotante += texto[a];
            if (verificadorTamano() && texto[a] == fase20) {
                flotante += texto[a];
                return flotante + ',' + a;
            }
        }
    } return false;
}

function analizadoComentario(texto, o) {
    let a = o, flotante = '';
    if (texto[a] == fase21) {
        flotante += texto[a];
        if (a < texto.length) a++;
        if (a < texto.length && texto[a] == fase21) {
            flotante += texto[a];
            for (let i = (a + 1); i < texto.length; i++) {
                if (texto[i] == ' ' && flotante>0) return false;
                flotante += texto[i];
                a = i;
            }
            if (texto[a] == '\n' || texto.length == (a + 1)) return flotante + ',' + a;
        } else {
            if (a < texto.length && texto[a] == fase22) {
                for (let i = a; i < texto.length; i++) {
                    if (texto[i] == '*' && (texto[i + 1] == '*' )) return false;
                    flotante += texto[i];
                    a = i;
                    if (texto[i + 1] == fase22) { a = a + 1; break; }
                }
                if (texto[a] == fase22) flotante += texto[a];
                a++;
                if (a == texto.length) return false;
                if (texto[a] == fase21) {
                    flotante += texto[a];
                    return flotante + ',' + [a];
                }
            }
        }
    } return false;
}
