// This file contains the JavaScript logic for the Terraform Tools UI. It handles user interactions, API calls, and any animations or transitions defined for the main page.

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hover');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hover');
        });
    });

    // Function to handle API calls
    async function callAPI(url, payload) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Error during API call:', error);
            throw error;
        }
    }

    // Example of handling button click for generating Terraform
    document.getElementById('btnGen').addEventListener('click', async () => {
        const input = document.getElementById('genInput').value;
        const outputElement = document.getElementById('genOutput');
        outputElement.innerHTML = '<div class="spinner"></div>'; // Show loading spinner

        try {
            const result = await callAPI('https://api.example.com/generate', { input });
            outputElement.textContent = result.output;
        } catch (error) {
            outputElement.textContent = 'Error: ' + error.message;
        }
    });

    // Add any additional event listeners or functions as needed
});