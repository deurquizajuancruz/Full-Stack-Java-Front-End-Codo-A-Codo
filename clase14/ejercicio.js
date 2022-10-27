/*
Calculadora sencilla: + - * /
*/

function calcular(){
    let op1;
    let op2;
    let operacion;
    let resultado;

    //leer variables desde el html
    op1 = document.getElementById("op1").value;
    operacion = document.getElementById("operacion").value;
    op2 = document.getElementById("op2").value;

    console.log('op1: ',op1);
    console.log('op2: ',op2);
    console.log('operacion: ',operacion);
    
    if (operacion==='+') {
        resultado= parseInt(op1) + parseInt(op2);
    }
    else if (operacion==='-') {
        resultado= (+op1) - (+op2);
    }
    else if (operacion==='*') {
        resultado=(+op1)*(+op2);
    }
    else if (operacion==='/')  {
        if (op2!='0') {
            resultado=(+op1)/(+op2);
        }
        else {
            resultado='No se puede dividir por cero';
        }  
    }
    else {
        resultado='Ingrese una operacion matemática válida'
    }

    console.log(resultado);
    document.getElementById('resultado').innerHTML=resultado;
}

function borrar() {
    document.getElementById('op1').value='';
    document.getElementById('op2').value='';
    document.getElementById('operacion').value='';
    document.getElementById('resultado').innerHTML='';
}

function guardar(valor) {
    if (op1===undefined) {
        op1=valor;
    }
    else {
        op2=valor;
    }
}