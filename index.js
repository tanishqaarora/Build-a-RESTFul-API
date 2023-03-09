require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3003;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res) => {
    // code here
}) 

app.listen(port, () => console.log(`Server is running on port: ${port}`));