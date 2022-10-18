function buscar(clave){
    document.getElementById('users').innerHTML = Users(USERS_DATA.data.filter(user=>user.first_name.includes(clave.toLowerCase())|| user.last_name.includes(clave.toLowerCase()) || user.email.includes(clave)));
}

//disparar a las demas funciones
function render() {
    renderComponent('navbar',Navbar('Mi primer pseudocomponente',buscar));
    search('https://reqres.in/api/users');
}

function search(url){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        renderComponent('users',Users(data.data));
        renderComponent('paginator',Paginator(data));
    });
}

function renderComponent(id, component){
    document.getElementById(id).innerHTML=component;
}

//invocar
render();