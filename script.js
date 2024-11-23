// Función para alternar el menú lateral
function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

// Ajuste del contenido cuando se hace clic en un enlace del menú
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open'); // Cerrar el menú
    });
});

function openTab(event, tabName) {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Quitar la clase "active" de todos los enlaces y contenidos
    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Añadir la clase "active" al enlace y contenido seleccionados
    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}
