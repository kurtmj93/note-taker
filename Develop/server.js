// require express & call as function
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;

// use static resources in public folder
app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get routers from routes.js file
const api = require('./routes/routes.js');
app.use('/api', api);


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// initialize app
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);