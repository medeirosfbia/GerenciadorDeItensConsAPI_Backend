const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8082;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const categoryController = require('./controllers/categoryController');
const itemsController = require('./controllers/itemsController');
app.use('/items', itemsController);
app.use('/categories', categoryController);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});