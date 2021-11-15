const express = require('express');
const expressHandlebars = require('express-handlebars');

let PORT = 80;
let HOST = '0.0.0.0';

if (process.env.NODE_ENV === 'production') {
    PORT = process.env.HOST;
    PORT = process.env.PORT;
}


const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    extname: '.handlebars'
    
}));

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/static/img/favicon.ico');
})


// handle 404
app.use((req, res) => {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

app.listen(4000);