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
