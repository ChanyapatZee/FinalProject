document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify({
            name,
            email,
            password
        }));

        document.getElementById('successMessage').classList.add('show');
        document.getElementById('errorMessage').classList.remove('show');

        setTimeout(function() {
            window.location.href = 'login.html'; // Redirect to login page
        }, 2000);
    } else {
        document.getElementById('errorMessage').classList.add('show');
        document.getElementById('successMessage').classList.remove('show');
    }
});
