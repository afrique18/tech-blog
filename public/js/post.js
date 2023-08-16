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

const updatePostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#update-title').value;
    const detail = document.querySelector('#update-detail').value;

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(id);
    const response = await fetch('/api/posts/${id}', {
        method: 'PUT',
        body: JSON.stringify({ title, detail }),
        headers: {
            'Content-Type': "application/json"
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to edit post');
    }
};

const deletePostHandler = async (event) => {
    if (event.target.getAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        console.log(id);
        const response = await fetch('/api/post/${id}', {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.updateBtn')
    .addEventListener('click', updatePostHandler);

document
    .querySelector('.deleteBtn')
    .addEventListener('click', deletePostHandler);


