/* routes.js exists as a best practice, though this app is small and doesn't really need it - only using one router, below
*/

// require & call express
const express = require('express');
const app = express();

// Import our modular router for /notes and use it
const notesRouter = require('./notes');
app.use('/notes', notesRouter);

// export that router
module.exports = app;