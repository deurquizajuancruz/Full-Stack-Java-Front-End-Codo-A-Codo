const alumnos = [
    {
        edad:35,
        nombre:'carlos',
        carrera:'LIC'
    },
    {
        edad:35,
        nombre:'Rodrigo',
        carrera:'ING'
    },
    {
        edad:35,
        nombre:'Lucia',
        carrera:'Literatura'
    },
    {
        edad:42,
        nombre:'Martin',
        carrera:'Filosofia'
    }
]

//SUMA DE TODAS LAS EDADES
let suma=0;
for (let i=0; i< alumnos.length;i++) {
    suma+=alumnos[i].edad;
}
console.log('Forma 1',suma);
suma=0;
for (let alumno of alumnos) {
    suma+=alumno.edad;
}
console.log('Forma 2',suma);
suma=0;
alumnos.forEach(alumno => suma+=alumno.edad);
console.log('Forma 3',suma);

// MENORES DE 40
const menores40=[];
for (let alumno of alumnos) {
    if (alumno.edad<40) {
        menores40.push(alumno);
    }
}
console.log(menores40);

const menores=alumnos.filter(alumno =>alumno.edad<40);
console.log(menores);
// EXISTE LA EDAD
let existe=false;
for (let i=0; i<alumnos.length && !existe;i++) {
    existe=alumnos[i].edad===31;
}
console.log('Existe?: ',existe);

const alumno25=alumnos.some(alumno => alumno.edad===25);
console.log(alumno25);
// TODOS LA MISMA EDAD
const todos=alumnos.every(alumno => alumno.edad===35);
console.log(todos);

let todos2=true;
for (let i=0;i<alumnos.length && todos2;i++) {
    todos2=alumnos[i].edad===35;
}
console.log('Todos?:',todos2)

//SOLO LOS NOMBRES DE LOS ALUMNOS
const nombres=[];
for (let alumno of alumnos) {
    nombres.push(alumno.nombre);
}
console.log('nombres: ',nombres);

const nombresMap=alumnos.map(alumno => alumno.nombre);
console.log(nombresMap);

//REDUCE
const sumareducida=alumnos.reduce((acum,actual)=> acum + actual.edad,0);
console.log('sumareduced: ',sumareducida);