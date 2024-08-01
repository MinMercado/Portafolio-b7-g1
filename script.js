// CRUD
// Crear Leer Actualizar Borrar

alert("Hola mundo! <3 Esto es JAVASCRIPT");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar eñ punto para llamar a una propiedad o a una acción del objeto
//Las acciones se distinguen por parentesis 

typewriter
  .pauseFor(2500)
  .typeString('Jazmin Mercado')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend Jr')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

//Usar eñ punto para llamar a una propiedad o a una acción del objeto
//Las acciones se distinguen por parentesis 

typewriterFrase
  .pauseFor(2500)
  .typeString('Por lo tanto hay que esforzarse')
  .pauseFor(300)
  .deleteAll()
  .typeString('perseverar y nunca rendirnos')
  .pauseFor(1000)
  .start();