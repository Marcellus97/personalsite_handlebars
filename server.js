const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    extname: '.handlebars'
    
}));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(4000);