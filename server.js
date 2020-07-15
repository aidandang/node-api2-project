const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./app.js');

// Start the server on a specified port.
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));