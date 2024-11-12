document.addEventListener('DOMContentLoaded', function() {  
    const form = document.getElementById('loginForm');  
    const messageBox = document.getElementById('message');  

    form.addEventListener('submit', async function(event) {  
        event.preventDefault(); // Prevent the default form submission  

        const username = document.getElementById('username').value;  
        const password = document.getElementById('password').value;  

        // Basic validation (you can expand this as needed)  
        if (!username || !password) {  
            messageBox.textContent = 'Please fill in both fields.';  
            return;  
        }  

        // Simulate an API call (replace with your actual authentication logic)  
        try {  
            const response = await simulateLogin(username, password);  
            if (response.success) {  
                messageBox.textContent = 'Login successful!';  
                // Redirect or handle successful login (e.g., redirect to dashboard)  
                window.location.href = 'dashboard.html'; // Replace with actual redirect  
            } else {  
                messageBox.textContent = response.message;  
            }  
        } catch (error) {  
            messageBox.textContent = 'An error occurred during login.';  
        }  
    });  

    // Simulated login function (replace with actual API call)  
    async function simulateLogin(username, password) {  
        return new Promise((resolve) => {  
            setTimeout(() => {  
                if (username === 'user' && password === 'pass') {  
                    resolve({ success: true });  
                } else {  
                    resolve({ success: false, message: 'Invalid username or password.' });  
                }  
            }, 1000);  
        });  
    }  
});