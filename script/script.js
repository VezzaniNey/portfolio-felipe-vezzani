// Theme Toggle Functionality (Light/Dark Mode)
// Floating button
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerText = '🌓 Toggle Theme';
themeToggleBtn.style.position = 'fixed';
themeToggleBtn.style.bottom = '20px';
themeToggleBtn.style.right = '20px';
themeToggleBtn.style.zIndex = '1000';
themeToggleBtn.style.borderRadius = '50px';

// Appending the button to the webpage
document.body.appendChild(themeToggleBtn);

// Adding the click event to toggle the 'dark-theme' class
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Prevents the default form submission (which reloads the page)
    event.preventDefault();

    // Fetching the values from the form fields and removing blank spaces
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation to check if fields are empty
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields before submitting.');
        return; 
    }

    // Advanced validation: Checking if the email format is valid using Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulation of form submission success
    alert('Mensagem enviada com sucesso!');
    
    // Clear the form fields after successful submission
    contactForm.reset();
});