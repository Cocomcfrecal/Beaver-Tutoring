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
    // Keep the current submission behavior
    const form = event.target;

    // Check if Formspree submission was successful
    setTimeout(() => {
        // After a slight delay (ensures form submission is processed), clear the form fields
        if (document.referrer.includes('formspree.io')) {
            form.reset(); // Clear all input fields in the form
            console.log('Form fields cleared after successful submission!');
        }
    }, 1000); // Adjust delay if needed to match Formspree response time
});
