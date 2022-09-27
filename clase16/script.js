function tomarNotas() {
    const nota1 =document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    
    if (validarNotas(nota1,nota2)) {
        if (sonNumeros(nota1,nota2)) {
            calcularValores(nota1,nota2);
        }
        else
            alert('Los datos ingresados no son números.');
    }
    else
        alert('Verifique los datos ingresados.');
}

function sonNumeros(n1,n2) {
    if (Number(n1)&& Number(n2)) {
        return true;
    }
    else
        return false;
}

function validarNotas(nota1,nota2) {
    if(nota1==='' || nota2==='') {
        return false;
    }
    else
        return true;
}

function calcularValores(nota1,nota2) {
    const notas = [];
    notas[0]=+nota1;
    notas[1]=+nota2;
    let menor=10;
    let mayor=0;
    let suma=0;
    for (let i=0;i<notas.length;i++) {
        if (notas[i]<menor) {
            menor=notas[i];
        }
        if (notas[i]>mayor) {
            mayor=notas[i];
        }
        suma+=notas[i];
    }
    actualizar('menor',menor);
    actualizar('mayor',mayor);
    actualizar('promedio',suma / notas.length);
}

function actualizar(div,valor) {
    document.getElementById(div).innerHTML=valor; //innerHTML = poner valor en el HTML
}

function borrar() {
    document.getElementById("nota1").value="";
    document.getElementById("nota2").value="";
}