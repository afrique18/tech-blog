const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password= document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/bloggers', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Password must be at least 8 characters.');
          }
        }

        let currentUser = username;
        return currentUser;
      };
      
      document
      .querySelector('#signup-form')
      .addEventListener('submit', signupFormHandler);
