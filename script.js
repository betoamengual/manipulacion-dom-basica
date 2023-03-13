const h1 = document.querySelector('h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const boton = document.querySelector('#calcular');
const res = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

//form.addEventListener('submit', sumar)

//function sumar(event){
  //  console.log({event});
 //   event.preventDefault();
  //  const suma = calculo1.value + calculo2.value;
  //  console.log(suma);
   // res.innerText = "El resultado es: " + suma;
//}

boton.addEventListener('click', sumar)
function sumar(event){
 
    const suma = calculo1.value + calculo2.value;
    console.log(suma);
    res.innerText = "El resultado es: " + suma;
}