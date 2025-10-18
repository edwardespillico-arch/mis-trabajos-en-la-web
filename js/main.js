// Archivo: /mi-portafolio/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio Pro: Inicialización completada.");
    
    // 1. Efecto de desplazamiento suave (si usas enlaces internos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Aquí podrías añadir la lógica para un formulario de contacto, 
    //    carruseles o cualquier otra interacción dinámica.
});