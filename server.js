const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas de ejemplo
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Arroz', price: 10.50 },
        { id: 2, name: 'Leche', price: 3.75 },
        { id: 3, name: 'Manzana', price: 1.20 }
    ];
    res.json(products);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
