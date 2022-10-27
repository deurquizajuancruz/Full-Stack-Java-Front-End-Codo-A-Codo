function incrementar() {
    const Label = document.getElementById('contador');
    let valor = parseInt(Label.innerHTML);
    valor++;
    Label.innerHTML=valor;
    paridad(valor);
}   

function decrementar() {
    const Label=document.getElementById('contador');
    let valor=parseInt(Label.innerHTML);
    valor--;
    Label.innerHTML=valor;
    paridad(valor);
}

function paridad(valor) {
    const labelParidad=document.getElementById('paridad');
    let esNumeroPar=esPar(valor);
    if (esNumeroPar) {
        labelParidad.innerHTML='PAR';
    }
    else {
        labelParidad.innerHTML='IMPAR';
    }
}

function esPar(valor) {
    return valor % 2 ===0;
}