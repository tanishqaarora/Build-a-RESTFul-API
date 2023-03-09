require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const port = process.env.PORT || 3003;
const app = express();
const User = require('./models/user');
const userRoutes = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', userRoutes);

app.listen(port, () => console.log(`Server is running on port: ${port}`));