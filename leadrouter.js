const express = require('express');
const bodyparser = require('body-parser');

const leadrouter = express.Router();

leadrouter.use(bodyparser.json());
leadrouter.route('/')
.all((req,res,next) =>
{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();

})
.get((req,res,next) =>
{
    res.end('will send all the leaders you need!!');

})
.post((req,res,next) =>
{
    res.end('will add the leader:'+req.body.name+'with details:'+req.body.description);

})
.put((req,res,next) =>
{
   res.statusCode=403;
    res.end('PUT operation not supported on leaders');

})
.delete((req,res,next) =>
{
    res.end('deleting all the leaders');

});

leadrouter.route('/leaders/:leaderid')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) =>
{
    res.end('will send details of leader:'+req.params.leaderid+'to you');

})

.post((req,res,next) =>
{
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+req.params.leaderid);

})

.put((req,res,next) =>
{
   res.write('updating the leader:'+req.params.leaderid);
   res.end('will update the leader:'+req.body.name+ 'with details:'+req.body.description);

})

.delete((req,res,next) =>
{
    res.end('deleting the leader:'+req.params.leaderid);

});





module.exports = leadrouter;