function borrar() {
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
    document.getElementById('mail').value='';
    document.getElementById('cantidad').value='';
    document.getElementById('categoria').selectedIndex='0';
    document.getElementById('total').innerHTML='';
}

function resumen(){
    const cant = document.getElementById('cantidad').value;
    const opcion = document.getElementById('categoria').selectedIndex;
    const total = document.getElementById('total').innerHTML;
    var precio;
    if (opcion === 0) {
        precio = cant * 40;
    }
    else
        if (opcion === 1) {
            precio = cant * 100;
    }
    else {
        precio = cant * 170;
    }
    var pagar= Number(precio) + Number(total);
    document.getElementById('total').innerHTML='';
    document.getElementById('total').innerHTML=pagar;
}