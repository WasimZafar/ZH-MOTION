
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;
    slides[currentSlide].classList.add('active');
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

// Event listeners for buttons
nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });

// Auto-play slides
function startInterval() {
    slideInterval = setInterval(nextSlide, 5000); // Changes every 5 seconds
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

startInterval(); // Start the slider

// 3. Smooth Scrolling for Nav Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.remove('active'); // Close mobile menu if open
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for sticky header height
                behavior: 'smooth'
            });
        }
    });
});


// Add this to the bottom of script.js

// Handle Appointment Form Submission
// const appointmentForm = document.querySelector('.appointment-form');
// if (appointmentForm) {
//     // Remove the inline HTML onsubmit first if you haven't already
//     appointmentForm.removeAttribute('onsubmit');

//     appointmentForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         // Gather data from the form
//         const formData = {
//             name: document.getElementById('name').value,
//             email: document.getElementById('email').value,
//             phone: document.getElementById('phone').value,
//             service: document.getElementById('service-interest').value,
//             date: document.getElementById('preferred-date').value,
//             message: document.getElementById('message').value
//         };

//         try {
//             // Send data to backend
//             const response = await fetch('http://localhost:3000/api/appointment', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData)
//             });

//             const result = await response.json();
//             if (result.success) {
//                 alert('Success! Your appointment request has been sent.');
//                 appointmentForm.reset(); // Clear the form
//             } else {
//                 alert('Something went wrong. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Failed to connect to the server.');
//         }
//     });
// }

// Handle Contact Form Submission
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//     contactForm.removeAttribute('onsubmit');

//     contactForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const formData = {
//             name: document.getElementById('contact-name').value,
//             email: document.getElementById('contact-email').value,
//             subject: document.getElementById('contact-subject').value,
//             message: document.getElementById('contact-message').value
//         };

//         try {
//             const response = await fetch('http://localhost:3000/api/contact', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData)
//             });

//             const result = await response.json();
//             if (result.success) {
//                 alert('Success! Your message has been sent.');
//                 contactForm.reset();
//             } else {
//                 alert('Something went wrong. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Failed to connect to the server.');
//         }
//     });
// }