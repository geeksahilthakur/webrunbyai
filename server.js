const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json()); // Parse JSON requests

const blogs = [];

app.post('/api/blogs', (req, res) => {
    const { title, body } = req.body;
    if (title && body) {
        const blog = { title, body };
        blogs.push(blog);
        res.status(201).json(blog);
    } else {
        res.status(400).json({ error: 'Title and body are required.' });
    }
});

app.get('/api/blogs', (req, res) => {
    res.json(blogs);
});

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'post.html'));
});

app.get('/display', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'display.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
