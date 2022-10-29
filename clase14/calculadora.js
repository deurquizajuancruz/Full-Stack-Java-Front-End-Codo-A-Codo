/*
Calculadora sencilla: + - * /
*/
function guardar(valor) {
    if (op1 === undefined) {
        op1 = valor;
    }
    else {
        op2 = valor;
    }
}

function operar(valor) {
    document.getElementById("operacion").value = valor;
    document.getElementById("operacion").innerHTML = valor;
}

function escribir(valor) {
    const operando1 = document.getElementById("op1").value;
    const operacion = document.getElementById("operacion").innerHTML;
    if (operacion != '') {
        document.getElementById("op2").innerHTML += valor;
    }
    else {
        if (operando1 === undefined) {
            document.getElementById("op1").innerHTML += valor;
        }
    }
}

function borrar() {
    document.getElementById("op1").innerHTML = '';
    document.getElementById("op2").innerHTML = '';
    document.getElementById("operacion").innerHTML = '';
    document.getElementById("operacion").value='';
    document.getElementById("resultado").innerHTML='';
}

function calcular(){
    var operando1 = Number(document.getElementById("op1").innerHTML);
    var operando2 = Number(document.getElementById("op2").innerHTML);
    const op = document.getElementById("operacion").value;
    var result;
    if (op === "+") {
        result= operando1 + operando2;
    }
    else if (op === '-') {
        result = operando1 - operando2;
    }
    else if (op === '*') {
        result = operando1 * operando2;
    }
    else if ((op==='/') && (operando2 !=0)) {
        result = operando1 / operando2;
    }
    else {
        result="División por cero";
    }
    document.getElementById("resultado").innerHTML=result;
}