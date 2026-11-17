
// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Frontend Developer!", "Backend Developer!", "Full Stack Web Developer!"],
    typeSpeed: 80,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});

// Mobile menu functionality
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
});

// Add header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});