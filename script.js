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
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const form = event.target; // Reference the form being submitted

    // Let the form submit naturally, then clear the fields
    setTimeout(() => {
        form.reset(); // Clear all form fields
        console.log('Form fields cleared after submission!');
    }, 500); // Slight delay to ensure submission occurs first
});
