document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Reset error message display
    errorMessage.style.display = 'none';

    // Simple validation logic
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        errorMessage.style.display = 'block';
        return;
    }

    // Simulate successful signup or add logic for real backend processing
    alert(`Signup successful! Welcome, ${username}!`);

    // Optionally, redirect to another page or do further processing
    window.location.href = 'welcome.html';
});
