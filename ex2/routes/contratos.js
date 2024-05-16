var express = require('express');
var axios = require('axios')
var router = express.Router();

router.get('/', function(req, res) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get('http://localhost:16000/contratos')
  .then(function(resposta){
    res.render('contratos', {title: 'Contratos', contratos: resposta.data, date: d});
  })
  .catch(function(erro){
    res.render('error',{error: erro, message: 'Erro ao recuperar os contratos'})
  })
});

module.exports = router;