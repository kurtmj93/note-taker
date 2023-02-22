// require express & call as function
const express = require('express');
const app = express();
const path = require('path');

// process.env.PORT allows heroku to set the port
let port = process.env.PORT;
// if heroku doesn't set the port (local), port = 3001
if (port == null || port == "") {
  port = 3001;
}


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
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port} 🚀`)
);