const btnAdd=document.getElementById('btnAdd');

// se puede agregar un evento desde JS
const claves=[];

function addToList(clave){
    claves.push(clave);
}

function validateKey(key) {
    return key!=='';
}

function renderkeys(){
    const list=findKeys();
    list.innerHTML='';
    claves.forEach(clave=>{
        list.innerHTML+=`<li>${clave}</li>`
    })
}

function findKeys(){
    return document.getElementById('claves');
}

function getID(){
    return document.getElementById('clave').value;
}



function renderKeyByDOM(){
    const list=findKeys();
    const ul=document.createElement('ul');
    ul.id='clavesUl';
    ul.className='classUl';
    list.appendChild(ul);
    for (let clave of claves){
        const li=document.createElement('li');
        li.innerHTML=clave;
        li.id=Math.random();
        ul.appendChild(li);
    }
}

function add(){
    const clave = getID();
    //const valida=validateKey(clave);
    if (validateKey(clave)) {
        addToList(clave);
        //renderkeys();
        renderKeyByDOM();
    }
    else {
        alert('Debe completar la clave');
    }
}

btnAdd.addEventListener('click',add);