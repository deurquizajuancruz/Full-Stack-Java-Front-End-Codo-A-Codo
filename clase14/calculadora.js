function operacion(){
    if (document.getElementById('operacion').innerHTML != '') { 
        return true; //devuelve true si ya hay operacion, false si no hay operacion
    }
}

function resultado() {
    if (document.getElementById('resultado').innerHTML != '') { // si ya hay resultado
        return true;
    }
}

function escribirNumero(num) {
    if (resultado()) {
        borrar();
        document.getElementById('op1').innerHTML+=num;
    }
    else if (!operacion()) { // si no hay operacion
        if (document.getElementById('op1').innerHTML != '0') { // si el primer numero es 0, no hay que escribir mas numeros
            document.getElementById('op1').innerHTML+=num;
        }
        else if (num != 0) {
            document.getElementById('op1').innerHTML=num;
        }
    }
    else { // si ya hay operacion y primer numero pero no segundo
        if (document.getElementById('op2').innerHTML !='0') {
            document.getElementById('op2').innerHTML+=num;
        }
        else if (num != 0) {
            document.getElementById('op2').innerHTML=num;
        }
    }
}

function borrar() {
    document.getElementById("op1").innerHTML = '';
    document.getElementById("op2").innerHTML = '';
    document.getElementById("operacion").innerHTML = '';
    document.getElementById("resultado").innerHTML='';
}

function escribirOperador(valor) {
    if (document.getElementById('op1').innerHTML !='') {
        document.getElementById('operacion').innerHTML=valor;
    }
}

function calcular() {
    const num1 = Number(document.getElementById('op1').innerHTML);
    const num2 = Number(document.getElementById('op2').innerHTML);
    const operacion = document.getElementById('operacion').innerHTML;
    if (operacion == '+') {
        document.getElementById('resultado').innerHTML=num1+num2;
    }
    else if (operacion == '-') {
        document.getElementById('resultado').innerHTML=num1-num2;
    }
    else if (operacion == '*'){
        document.getElementById('resultado').innerHTML=num1*num2;
    }
    else if (operacion == '/') {
        document.getElementById('resultado').innerHTML=num1/num2;
    }
    else if (operacion == '%') {
        document.getElementById('resultado').innerHTML=num1%num2;
    }
}

function negar() {
    const num1 = Number(document.getElementById('op1').innerHTML);
    const num2 = Number(document.getElementById('op2').innerHTML);
    if (!operacion() && document.getElementById('op1').innerHTML != '') {
        document.getElementById('op1').innerHTML=(num1-(num1*2));
    }
    else if (document.getElementById('op2').innerHTML != ''){
        document.getElementById('op2').innerHTML=(num2-(num2*2));
    }
}

function borrarNumero() {
    if (document.getElementById('op2').innerHTML != '') {
        document.getElementById('op2').innerHTML = document.getElementById('op2').innerHTML.substring(0, document.getElementById('op2').innerHTML.length -1);
        document.getElementById('resultado').innerHTML='';
    }
    else if (document.getElementById('operacion').innerHTML != '') {
        document.getElementById('operacion').innerHTML='';
        document.getElementById('resultado').innerHTML='';
    }
    else if (document.getElementById('operacion').innerHTML =='' && document.getElementById('op1').innerHTML != '') {
        document.getElementById('op1').innerHTML = document.getElementById('op1').innerHTML.substring(0, document.getElementById('op1').innerHTML.length -1);
        document.getElementById('resultado').innerHTML='';
    }
}