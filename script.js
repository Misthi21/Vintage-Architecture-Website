window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#333';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
});