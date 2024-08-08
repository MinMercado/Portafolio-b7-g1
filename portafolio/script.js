// CRUD
// Crear Leer Actualizar Borrar

alert("Estoy probando JavaScript, pausa la musica si no deseas escucharla.");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar el punto para llamar a una propiedad o a una acción del objeto
//Las acciones se distinguen por parentesis 

typewriter
  .pauseFor(2500)
  .typeString('Jazmin Mercado')
  .pauseFor(300)
  .deleteAll()
  .typeString('Estudiante de Desarrollo de Software Multiplataforma')
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
  .pauseFor(1000)
  .typeString('El futuro pertenece a quienes creen en la belleza de sus sueños.')
  .pauseFor(1000)
  .deleteAll()
  .typeString('-Eleanor Roosevelt.')
  .pauseFor(500)
  .start();

let audioElement;
const mainElement = document.querySelector('main');

  mainElement.addEventListener('click', function() {
    if(!audioElement) {
      audioElement = new Audio('assets/music/tropical.mp3');
    }
    audioElement.play();
  });

const pauseButton = document.getElementById('pause');
pauseButton.addEventListener('click',function() {
  if(audioElement.paused) {
    audioElement.play();
    pauseButton.textContent = "Pausar";
  }else{
    audioElement.pause();
    pauseButton.textContent = "Reanudar";
  }
});