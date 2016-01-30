var express = require('express');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Ruta que consulta el API externo. Recibe como parametro el numero de la tarjeta
app.post('/consultar-saldo/:numTarjeta', function(req, res){
  request({
    uri: "http://www.metrosantiago.cl/contents/guia-viajero/includes/consultarTarjeta/" + req.params.numTarjeta,
    method: "POST"
  }, function(error, response, body){
    res.json(body);
  });
});
//Renderiza el home
app.get('/', function(req, res){
  res.render('home');
});


app.listen(app.get('port'), function(){
  console.log('App running in port ' + app.get('port'));
});
