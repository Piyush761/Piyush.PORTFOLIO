// --- Mobile Menu Toggle ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Simple toggle animation for hamburger lines could go here
});

// Close menu when a link is clicked
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- Active Nav Link highlighting on scroll ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if we have scrolled past 1/3 of the section
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});

// --- Hide/Show Navbar on Scroll ---
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY && window.scrollY > 80) {
        navbar.classList.add('scroll-down');
        navbar.classList.remove('scroll-up');
    } else {
        navbar.classList.add('scroll-up');
        navbar.classList.remove('scroll-down');
    }
    lastScrollY = window.scrollY;
});