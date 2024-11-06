// Redirect to specific pages when buttons are clicked

// Event listener for the "Start free trial" button
document.querySelector('.start-trial').addEventListener('click', () => {
    alert('Starting a free trial! Redirecting...');
    window.location.href = 'free-trial-page.html'; // Redirect to the free trial page
});

// Event listener for the "Get a demo" button
document.querySelector('.get-demo').addEventListener('click', () => {
    alert('Scheduling a demo! Redirecting...');
    window.location.href = 'demo-page.html'; // Redirect to the demo page
});

// Event listener for the "Products" button in the navbar
document.querySelector('.Products').addEventListener('click', () => {
    alert('Navigating to Products page...');
    window.location.href = 'products.html'; // Redirect to the products page
});

// Event listener for the "Contact" button in the navbar
document.querySelector('.Contact').addEventListener('click', () => {
    alert('Navigating to Contact page...');
    window.location.href = 'contact.html'; // Redirect to the contact page
});

// Event listener for the "Login" button in the navbar
document.querySelector('.login').addEventListener('click', () => {
    alert('Navigating to Login page...');
    window.location.href = 'login.html'; // Redirect to the login page
});

// Event listener for the "Register" button in the navbar
document.querySelector('.register').addEventListener('click', () => {
    alert('Navigating to Register page...');
    window.location.href = 'create.html'; // Redirect to the register page
});

// Optional: Add animations or other interactivity when the page loads
window.addEventListener('load', () => {
    console.log('Page loaded successfully!');
    // Additional code for animations or initial setup can be added here
});
