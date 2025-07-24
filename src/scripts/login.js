// This file contains the JavaScript logic for the login page. It handles form validation, submission, and any animations or transitions defined for the login experience.

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        errorMessage.textContent = '';

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in all fields.';
            return;
        }

        // Simulate a login request
        simulateLogin(username, password);
    });

    function simulateLogin(username, password) {
        // Simulate an API call with a timeout
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                // Redirect to the main UI on successful login
                window.location.href = 'index.html';
            } else {
                errorMessage.textContent = 'Invalid username or password.';
            }
        }, 1000);
    }
});