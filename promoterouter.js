const express = require('express');
const bodyparser = require('body-parser');

const promoterouter = express.Router();

promoterouter.use(bodyparser.json());
promoterouter.route('/')
.all((req,res,next) =>
{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();

})
.get((req,res,next) =>
{
    res.end('will send all the promotions you need!!');

})
.post((req,res,next) =>
{
    res.end('will add the promotion:'+req.body.name+'with details:'+req.body.description);

})
.put((req,res,next) =>
{
   res.statusCode=403;
    res.end('PUT operation not supported on promotions');

})
.delete((req,res,next) =>
{
    res.end('deleting all the promotions');

});

promoterouter.route('/promotions/:promoid')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) =>
{
    res.end('will send details of promotion:'+req.params.promoid+'to you');

})

.post((req,res,next) =>
{
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+req.params.promoid);

})

.put((req,res,next) =>
{
   res.write('updating the promotion:'+req.params.promoid);
   res.end('will update the promotion:'+req.body.name+ 'with details:'+req.body.description);

})

.delete((req,res,next) =>
{
    res.end('deleting the promotion '+req.params.promoid);

});





module.exports = promoterouter;