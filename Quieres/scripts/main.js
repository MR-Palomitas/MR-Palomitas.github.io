// Función para aceptar
function aceptar() {
    document.querySelector('.botones').style.display = 'none';
    document.querySelector('.corazon').style.display = 'none';
    document.getElementById('mensaje').style.display = 'block';
    document.querySelector('h1').innerHTML = "¡Feliz San Valentín! 💝";
    document.querySelector('.video-container').style.display = 'block';  // Mostrar el video
}

// Función para mover el botón "No"
function moverBoton() {
    const btn = document.getElementById('noBtn');
    btn.style.transform = `translate(${Math.random() * 300 - 200}px, ${Math.random() * 300 - 200}px)`;
    btn.style.transition = 'all 0.5s ease';
}

// Asignar eventos a los botones
document.getElementById('siBtn').addEventListener('click', aceptar);
document.getElementById('noBtn').addEventListener('mouseover', moverBoton);

