function convertir(){
    var entradaMatriz = ['david','carlos'],matriz2 = ['marta'],salida;
    salida = entradaMatriz + matriz2;
    for (let i = 0; i < entrada.length; i++) {
        i++;
    }
}
var entrada = document.getElementById('texto');
function mostrar() {
    let total = "", texto = entrada.value, flotante,matriz=[],matrizTotal=[matriz];
    let saltos = texto.split('\n');
    //console.log('saltos '+saltos.length+' contiene :\n'+texto);
    for (let i = 0; i < saltos.length; i++) {
        for (let j = 0; j < saltos[i].length; j++) {
            if (saltos[i][j] != ' ' && saltos[i][j] != '') {
                flotante = analizador(saltos[i], j, i);                
                j = flotante[3];
                total += flotante + '\n';
            }
        }
    }
    console.log(total);
    recibidor(total);
    analizarSintacticamente(total);
}

