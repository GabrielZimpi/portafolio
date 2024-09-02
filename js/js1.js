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
        });
    });

    // Mostrar la primera seccion por defecto
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

function verImg1() {
    // Mostrar la img1 y ocultar la img2
    document.querySelector('.img1').classList.add('show');
    document.querySelector('.img2').classList.remove('show');
}

function verImg2() {
    // Mostrar la img2 y ocultar la img1
    document.querySelector('.img2').classList.add('show');
    document.querySelector('.img1').classList.remove('show');
}

