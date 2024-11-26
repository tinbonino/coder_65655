//  Desestructurando arrays

let nombres = ["Guille","Luka","Nico","Brian","Emiliano"];

// let nombre1=nombres[0];
// let nombre2=nombres[1];
// let nombre3=nombres[2];
// let nombre4=nombres[3];
// let nombre5=nombres[4];

let [nombre1,nombre2,nombre3,nombre4,nombre5] = nombres;

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
console.log(nombre4);
console.log(nombre5);

// Quiero desestructurar el primero y el tercero nada mas

let [primero,,tercero,,] = nombres;

console.log(primero);
console.log(tercero);

let [first,...otros]=nombres;

console.log(first);
console.log(otros);

// Desestructurando Objetos

let estudiante = {
    nombre:"Javiera",
    apellido:"Pino",
    curso:"React"
}

console.log(estudiante.nombre);

let {nombre,curso,apellido}=estudiante;

console.log(nombre);
console.log(`Hola ${nombre} ${apellido} Bienvenida al curso de ${curso}`)

let {nombre:name,apellido:surname}=estudiante;

console.log(name)
console.log(surname)