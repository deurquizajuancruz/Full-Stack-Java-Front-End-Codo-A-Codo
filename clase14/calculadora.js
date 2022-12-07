function operacion() {
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
        document.getElementById('op1').innerHTML += num;
    }
    else if (!operacion()) { // si no hay operacion
        if (document.getElementById('op1').innerHTML != '0') { // si el primer numero es 0, no hay que escribir mas numeros
            document.getElementById('op1').innerHTML += num;
        }
        else if (num != 0) {
            document.getElementById('op1').innerHTML = num;
        }
    }
    else { // si ya hay operacion y primer numero pero no segundo
        if (document.getElementById('op2').innerHTML != '0') {
            document.getElementById('op2').innerHTML += num;
        }
        else if (num != 0) {
            document.getElementById('op2').innerHTML = num;
        }
    }
}

function borrar() {
    document.getElementById("op1").innerHTML = '';
    document.getElementById("op2").innerHTML = '';
    document.getElementById("operacion").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
}

function escribirOperador(valor) {
    if (document.getElementById('op1').innerHTML != '') { // si ya hay un numero
        document.getElementById('operacion').innerHTML = valor;
    }
}

function calcular() {
    const num1 = Number(document.getElementById('op1').innerHTML);
    const num2 = Number(document.getElementById('op2').innerHTML);
    const operacion = document.getElementById('operacion').innerHTML;
    switch (operacion) {
        case '+':
            document.getElementById('resultado').innerHTML = num1 + num2;
            break;
        case '-':
            document.getElementById('resultado').innerHTML = num1 - num2;
            break;
        case '*':
            document.getElementById('resultado').innerHTML = num1 * num2;
            break;
        case '/':
            document.getElementById('resultado').innerHTML = num1 / num2;
            break;
        case '%':
            document.getElementById('resultado').innerHTML = num1 % num2;
            break;
    }
}

function negar() {
    const num1 = Number(document.getElementById('op1').innerHTML);
    const num2 = Number(document.getElementById('op2').innerHTML);
    if (!operacion() && document.getElementById('op1').innerHTML != '') {
        document.getElementById('op1').innerHTML = (num1 - (num1 * 2));
    }
    else if (document.getElementById('op2').innerHTML != '') {
        document.getElementById('op2').innerHTML = (num2 - (num2 * 2));
    }
}

function borrarNumero() {
    if (document.getElementById('op2').innerHTML != '') {
        document.getElementById('op2').innerHTML = document.getElementById('op2').innerHTML.substring(0, document.getElementById('op2').innerHTML.length - 1);
        document.getElementById('resultado').innerHTML = '';
    }
    else if (document.getElementById('operacion').innerHTML != '') {
        document.getElementById('operacion').innerHTML = '';
        document.getElementById('resultado').innerHTML = '';
    }
    else if (document.getElementById('operacion').innerHTML == '' && document.getElementById('op1').innerHTML != '') {
        document.getElementById('op1').innerHTML = document.getElementById('op1').innerHTML.substring(0, document.getElementById('op1').innerHTML.length - 1);
        document.getElementById('resultado').innerHTML = '';
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '1':
            escribirNumero(1);
            break;
        case '2':
            escribirNumero(2);
            break;
        case '3':
            escribirNumero(3);
            break;
        case '4':
            escribirNumero(4);
            break;
        case '5':
            escribirNumero(5);
            break;
        case '6':
            escribirNumero(6);
            break;
        case '7':
            escribirNumero(7);
            break;
        case '8':
            escribirNumero(8);
            break;
        case '9':
            escribirNumero(9);
            break;
        case '+':
            escribirOperador('+');
            break;
        case '-':
            escribirOperador('-');
            break;
        case '*':
            escribirOperador('*');
            break;
        case '/':
            escribirOperador('/');
            break;
        case '%':
            escribirOperador('%');
            break;
        case 'Enter':
        case '=':
            calcular();
            break;
        case 'Delete':
            borrar();
            break;
        case 'Backspace':
            borrarNumero();
            break;
    }
}
);