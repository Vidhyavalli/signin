document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('signInForm');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            
            // Clear previous errors
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            
            let isValid = true;
            
            // Validate email
            if (!email) {
                emailError.textContent = 'Email is required';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!isValidEmail(email)) {
                emailError.textContent = 'Please enter a valid email';
                emailError.style.display = 'block';
                isValid = false;
            }
            
            // Validate password
            if (!password) {
                passwordError.textContent = 'Password is required';
                passwordError.style.display = 'block';
                isValid = false;
            } else if (password.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters';
                passwordError.style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                alert('Sign in successful!\nEmail: ' + email);
                // Here you would typically send the credentials to a server
            }
        });
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
 
    });