const blogForm = document.getElementById('blogForm');

function postBlog() {
    const title = document.getElementById('blogTitle').value;
    const body = document.getElementById('blogBody').value;

    if (title && body) {
        const blog = { title, body }; // Create a blog object
        fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog),
        })
        .then(response => response.json())
        .then(() => {
            alert('Blog posted successfully!');
            // Optionally, you can redirect to the display page or update the DOM to show the new blog.
        })
        .catch(error => {
            console.error('Error posting blog:', error);
        });
    } else {
        alert('Please fill in both title and body.');
    }
}
