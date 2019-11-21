
        /* cada fase se representa como caminos de un estado distinto de la fase 1 a la 9 servida para reconocer
    las caracteres de palabras reservadas, cada fase mencionada contiene un caracter de alguna palabra 
    reservada al final de cada arreglo se mostrara la cadena completa que mostrara una aceptacio como 
    palabra reservada*/
    var fase1 = "s,h,f,r,e,d,m,v,b,c,f,p,r,v,c,p,i";
    var fase2 = "i,a,n,e,o,u,r,e,a,a,a,m";// si
    var fase3 = "n,c,d,l,t,c,e,r,o,n,i,t,c,r,r,p";
    var fase4 = "o,e,s,i,n,l,d,c,n,o,i,a,a,r";// sino, para
    var fase5 = "r,o,n,m,t,a,e,i,c,r,o,c,i";// hacer, falso, vacio
    var fase6 = "a,o,r,b,d,o,i,n,t,m";// cadena, entero
    var fase7 = "l,a,n,e,n,p,a,e,i";// decimal, funcion
    var fase8 = "s,e,o,r,a,r,r,r";// mientras, staticiable, booleano, retornar, caracter, imprimir
    var fase9 = "o,l";// verdadero, principal
    //camino de estados para abecedario SOLO ACEPTARA MINUSCULAS, las cuales serviran para identificador
    var fase10 = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    //camino de estados que servira para reconocer los numeros, utilizado para identificador (seguido de letra), entero y flotanta(numeros seguido de punto y numeros)
    var fase11 = "0,1,2,3,4,5,6,7,8,9";
    //camino de estados que contiene los simbolos de agrupacion
    var fase12 = "(,),{,},[,]";
    //camino de estados para aceptar lo que es operadores, estados de fase 13 al 15
    var fase13 = "=";
    var fase14 = "=,>,<";
    var fase15 = "+,-,/,%,*,>,<";//se quito diagonal
    //camino de estados para aceptar signos
    var fase16 = ";";//se quitaron comillas
    //camino de concatenacion de las cadenas para las palabras reservadas
    var fase17 = '“';
    var fase18 = '”';
    var fase19 = '‘';
    var fase20 = '’';
    var fase21 = '/';
    var fase22 = '*';
