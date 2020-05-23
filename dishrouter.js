const express = require('express');
const bodyparser = require('body-parser');

const dishrouter = express.Router();

dishrouter.use(bodyparser.json());

dishrouter.route('/')
.all((req,res,next) =>
{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();

})
.get((req,res,next) =>
{
    res.end('will send all the dishes you need!!');

})
.post((req,res,next) =>
{
    res.end('will add the dish:'+req.body.name+'with details:'+req.body.description);

})
.put((req,res,next) =>
{
   res.statusCode=403;
    res.end('put operation not disabled on dishes');

})
.delete((req,res,next) =>
{
    res.end('deleting all the dishes');

});

dishrouter.route('/dishes/:dishid')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) =>
{
    res.end('will send details of dish:'+ req.params.dishid+'to you');

})

.post((req,res,next) =>
{
    res.statusCode = 403;
    res.end('post operation not enabled on /dishes/'+ req.params.dishid);

})

.put((req,res,next) =>
{
   res.write('updating the dish:'+req.params.dishid);
   res.end('will update the dish:'+req.body.name+ 'with details:'+req.body.description);

})

.delete((req,res,next) =>
{
    res.end('deleting the dish '+req.params.dishid);

});


module.exports = dishrouter;