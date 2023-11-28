const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

// Config dotenv file
dotenv.config();

// Rest object
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
	res.send('<h1>Hello from server</h1>');
});

// Port
const PORT = 8080 || process.env.PORT;

// Listen server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
