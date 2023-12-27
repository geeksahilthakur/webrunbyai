document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/blogs')
        .then(response => response.json())
        .then(blogs => {
            const blogsContainer = document.getElementById('blogsContainer');
            blogs.forEach(blog => {
                const blogCard = document.createElement('div');
                blogCard.classList.add('blog-card');

                const blogTitle = document.createElement('h3');
                blogTitle.classList.add('blog-title');
                blogTitle.textContent = blog.title;

                const blogBody = document.createElement('p');
                blogBody.classList.add('blog-body');
                blogBody.textContent = blog.body;

                blogCard.appendChild(blogTitle);
                blogCard.appendChild(blogBody);
                blogsContainer.appendChild(blogCard);
            });
        })
        .catch(error => {
            console.error('Error fetching blogs:', error);
        });
});
