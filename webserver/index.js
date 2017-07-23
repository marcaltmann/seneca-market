const Express = require('express')
const path = require('path')

let app = Express()

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(5000)
