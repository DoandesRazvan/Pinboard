const express = require('express'),
      path = require('path'),
      app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('./sections/index');
})

app.listen(port);