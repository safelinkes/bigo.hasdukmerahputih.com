const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;
const path = require('path');


const DATA = require('./links.json');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  })

for (let key in DATA) {
    app.get(`/${key}`, (req, res) => {
        res.redirect(DATA[key]);
    })
}

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })