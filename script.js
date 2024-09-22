document.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';  // Solid background when scrolled
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';  // Slightly transparent at top
    }
});
