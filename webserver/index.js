const Express = require('express');
const path = require('path');

let app = Express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  })
  .get('/app.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'app.js'));
  });

app.listen(5000);
