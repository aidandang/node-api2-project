const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');
const app = express(); 

const postRouter = require('./routes/postRoutes');

// Middlewares
app.use(bodyParser.json());
app.use(CORS());
app.use('/api/posts', postRouter);

module.exports = app;