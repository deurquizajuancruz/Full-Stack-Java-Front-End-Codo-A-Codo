function buscar(clave){
    document.getElementById('users').innerHTML = Users(USERS_DATA.data.filter(user=>user.first_name.includes(clave)|| user.last_name.includes(clave) || user.email.includes(clave)));
}

//disparar a las demas funciones
function render() {
    document.getElementById('navbar').innerHTML= Navbar('Mi primer pseudocomponente',buscar);
    document.getElementById('users').innerHTML = Users(USERS_DATA.data);
}

//invocar
render();