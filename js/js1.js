document.addEventListener('DOMContentLoaded', (event) => {
    const enlaces = document.querySelectorAll('.barra-lateral a');
    const secciones = document.querySelectorAll('.contenido section');
    const footer = document.querySelector('.footer');
    const barraLateral = document.querySelector('.barra-lateral');
    const contenido = document.querySelector('.posifooter');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            secciones.forEach(seccion => {
                seccion.style.display = 'none';
            });

            const seccionObjetivo = document.querySelector(enlace.getAttribute('href'));
            seccionObjetivo.style.display = 'flex';

            // Verificar el ancho de la pantalla y desplazar solo si es menor de 768px
            if (window.innerWidth < 768) {
                seccionObjetivo.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Mostrar la primera sección por defecto
    secciones.forEach((seccion, indice) => {
        if (indice === 0) {
            seccion.style.display = 'flex';
        } else {
            seccion.style.display = 'none';
        }
    });

    const ajustarFooter = () => {
        if (window.innerWidth <= 767) {
            contenido.appendChild(footer);
        } else {
            barraLateral.appendChild(footer);
        }
    };

    window.addEventListener('resize', ajustarFooter);
    ajustarFooter();
});

/*PRESENTACION*/
function skipPresentation() {
    document.getElementById('bodypresent').classList.add('hidden');
    document.getElementById('bodyprincip').classList.remove('hidden');
}

setTimeout(function() {
    document.getElementById('bodypresent').classList.add('hidden');
    document.getElementById('bodyprincip').classList.remove('hidden');
}, 8000);

/* CONTACTO */
function updateText(text) {
    document.getElementById('textenlace').value = text;
}
function openLink(url) {
    window.open(url, '_blank');
}

/* PROYECTOS */
function updateTextProyect1(text1) {
    document.getElementById('enlaceproy1').value = text1;
}
function updateTextProyect2(text2) {
    document.getElementById('enlaceproy2').value = text2;
}
function updateTextProyect3(text3) {
    document.getElementById('enlaceproy3').value = text3;
}
function updateTextProyect4(text4) {
    document.getElementById('enlaceproy4').value = text4;
}
function updateTextProyect5(text5) {
    document.getElementById('enlaceproy5').value = text5;
}
function updateTextProyect6(text6) {
    document.getElementById('enlaceproy6').value = text6;
}

document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los elementos <li> con id proyectoX
    const proyectos = document.querySelectorAll('.listaproyectos li');

    // Agrega un evento de clic a cada <li>
    proyectos.forEach(function(proyecto) {
        proyecto.addEventListener('click', function() {

            document.getElementById('portadaporta').classList.remove('portadaporta');
            document.getElementById('portadaporta').classList.add('hidden');

            // Oculta todos los elementos con la clase .detallesproyectos
            document.querySelectorAll('.detallesproyectos').forEach(function(detalle) {
                detalle.style.display = 'none';
            });

            // Muestra solo el elemento correspondiente al id del proyecto seleccionado
            const proyectoId = this.id.replace('proyecto', 'etc-proyecto');
            document.getElementById(proyectoId).style.display = 'flex';
        });
    });

    // Oculta todos los detalles inicialmente
    document.querySelectorAll('.detallesproyectos').forEach(function(detalle) {
        detalle.style.display = 'none';
    });
});

function verImg(button, imgClass) {
    // Encontrar el contenedor del proyecto al que pertenece el botón
    var projectContainer = button.closest('.inforproyectos');
    
    // Ocultar todas las imágenes dentro de este proyecto
    projectContainer.querySelectorAll('.imageinvisi').forEach(function(img) {
        img.classList.remove('show');
    });
    
    // Mostrar la imagen correspondiente en este proyecto
    projectContainer.querySelector('.' + imgClass).classList.add('show');
}

// pop up //
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todas las imágenes con la clase 'imageinvisi'
    const imgInvisi = document.querySelectorAll('.imageinvisi');
    
    imgInvisi.forEach(function(img) {
      // Crear el contenedor del pop-up
      const popup = document.createElement('div');
      popup.classList.add('image-popup');
  
      // Crear una copia de la imagen para el pop-up
      const popupImage = new Image();
      popupImage.src = img.src;
  
      // Añadir la imagen al pop-up
      popup.appendChild(popupImage);
      document.body.appendChild(popup);
  
      // Evento para mostrar el pop-up al hacer clic en la imagen
      img.addEventListener('click', function() {
        popup.classList.add('show');
      });
  
      // Evento para ocultar el pop-up al hacer clic en cualquier parte del mismo
      popup.addEventListener('click', function() {
        popup.classList.remove('show');
      });
    });
  });
  