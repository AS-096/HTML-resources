document.addEventListener('DOMContentLoaded', (event) => {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', (e) => {
        cursor.classList.toggle('fade');
    });
    document.addEventListener('mouseenter', (e) => {
        cursor.classList.toggle('fade');
    });
});