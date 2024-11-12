document.addEventListener('DOMContentLoaded', function() {  
    const signupForm = document.getElementById('signupForm');  
    const signupMessage = document.getElementById('signupMessage');  

    // Handle signup form submission  
    signupForm.addEventListener('submit', async function(event) {  
        event.preventDefault();  

        const username = document.getElementById('signupUsername').value;  
        const password = document.getElementById('signupPassword').value;  
        const passwordConfirm = document.getElementById('signupPasswordConfirm').value;  

        // Perform signup validation  
        if (!username || !password || !passwordConfirm) {  
            signupMessage.textContent = 'Please fill in all fields.';  
            return;  
        }  

        if (password !== passwordConfirm) {  
            signupMessage.textContent = 'Password confirmation does not match.';  
            return;  
        }  

        try {  
            const response = await simulateSignup(username, password);  
            signupMessage.textContent = response.success ? 'Signup successful!' : response.message;  

            if (response.success) {  
                // Optionally, redirect the user or take further action  
                window.location.href = 'dashboard.html'; // Change this to actual redirect  
            }  
        } catch (error) {  
            signupMessage.textContent = 'An error occurred during signup.';  
        }  
    });  

    const { MongoClient } = require('mongodb');
    // Replace with your MongoDB connection string
    const MONGO_URI = 'mongodb://localhost:27017';

    async function simulateSignup(username, password) {
        const client = new MongoClient(MONGO_URI);
        const db = client.db();
        const usersCollection = db.collection('users');

        try {
            const existingUser = await usersCollection.findOne({ username });
            if (existingUser) {
                return { success: false, message: 'Username already taken.' };
            } else {
                // Create a new user document
                const newUser = await usersCollection.insertOne({ username, password });
                return { success: true };
            }
        } catch (error) {
            console.error(error);
            return { success: false, message: 'Error creating user.' };
        } finally {
            await client.close();
        }
    }
});