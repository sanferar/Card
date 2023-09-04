const app = document.getElementById('app');


const botonLey = document.getElementById('__tooltyp');
const botonCerrar = document.getElementById('cerrar');
const collapse = document.getElementById('collapse');

botonLey.addEventListener('click', ()=>{
    collapse.classList.add('contenedor__historial__collapse--opacity');
})

botonCerrar.addEventListener('click', ()=>{
    collapse.classList.remove('contenedor__historial__collapse--opacity');
})


