const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const dishrouter = require('./routes/dishrouter');
const promoterouter = require('./routes/promoterouter');
const leadrouter = require('./routes/leadrouter');

const hostname = 'localhost';
const port = 3000;



const app= express();
app.use(morgan('dev'));
app.use(bodyparser.json());


app.use('/dishes',dishrouter);
app.use('/promotions',promoterouter);
app.use('/leaders',leadrouter);

app.use(express.static(__dirname+ '/public'));



app.use((req,res,next)  =>
    {
        res.statusCode = 200;
        res.setHeader('Content-type','text/html');
        res.end('<html><body><h1>this is express server setup</h1></body></html>')
    });

const server =http.createServer(app);

server.listen(port, hostname,() =>
{
    console.log(`Server running at http://${hostname}:${port}`);

});
            