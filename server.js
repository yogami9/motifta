const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files like CSS, JS, and images
app.use(express.static(path.join(__dirname, 'public')));

// Route for splash page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'splash.html'));
});

// Routes for other pages
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html.html'));
});

app.get('/service', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'service.html'));
});

app.get('/process', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'process.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
