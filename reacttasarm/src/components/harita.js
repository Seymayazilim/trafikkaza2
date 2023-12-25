const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Trafik kazaları verileri (örnek veri, gerçek bir veritabanından alınmalıdır).
const kazaVerileri = [
    { ilce: 'Merkez', kazaSayisi: 5, coordinates: [38.6769, 39.2208] },
    { ilce: 'Palu', kazaSayisi: 2, coordinates: [38.9414, 39.5826] },
    // Diğer ilçeleri ekleyin...
];

app.use(express.static('public'));

app.get('/kazalar', (req, res) => {
    res.json(kazaVerileri);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
