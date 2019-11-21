function analizar(entrada) {
    let i, j;
    let verificador = (() => {
        if (i == entrada.length) return false; else { i++; return true; }
    })
    for (i = 0; i < entrada.length; i++) {
        for (j = 0; j < entrada[i].length; j++) {
            if (entrada[i][0] == 'imprimir') {
                if(verificador() && entrada[i][1] == '('){
                    
                }
            }

        }
    }
}