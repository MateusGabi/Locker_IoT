const express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/data',function(req,resp){
    console.log(req.body);
    resp.json(
        {Sucesso : true}
    );
});

app.listen(3000, function(){
	console.log('Servidor on');
});
