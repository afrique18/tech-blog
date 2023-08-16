const loginFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const detail = document.querySelector('#post-detail').value.trim();
    
    if (title && detail) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ title, detail }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            console.log(error);
            alert('Field to create post');
          }
        }
      };
      
      document
      .querySelector('.submitPostBtn')
      .addEventListener('click', newFormHandler);