// Sticky Navbar and Smooth Scrolling Enhancements
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

// Smooth scrolling for internal links (if not supported natively)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            setTimeout(() => {
                // Directly clear each field
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';

                console.log('Text boxes cleared after successful submission!');
            }, 500); // Small delay to ensure submission completes
        });
    } else {
        console.error('Form with ID "contactForm" not found!');
    }
});
