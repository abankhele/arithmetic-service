const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Arithmetic service - last updated: ' + new Date().toISOString());
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);
    res.json({ result: sum });
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
