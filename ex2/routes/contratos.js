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

router.get('/entidades/:id', function(req, res) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get(`http://localhost:16000/contratos?entidade=${req.params.id}`)
    .then(function(response){
      const contratos = response.data;
      const entidadeEncontrada = contratos.find(entidade => entidade.NIPC_entidade_comunicante == req.params.id);
      
      if (entidadeEncontrada) {
        res.render('entidade', { title: `Entidade ${entidadeEncontrada.NIPC_entidade_comunicante}`, entidade: entidadeEncontrada, date: d });
      } else {
        res.render('error', { error: 'Entidade não encontrada', message: 'Erro ao recuperar os contratos' });
      }
    })
    .catch(function(error){
      res.render('error', { error: error, message: 'Erro ao recuperar as entidades'});
    });
});

router.get('/:id', function(req, res) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get('http://localhost:16000/contratos/'+req.params.id)
  .then(function(resposta){
    res.render('contrato', {title: "Contrato " + resposta.data._id, contrato: resposta.data, date: d});
  })
  .catch(function(erro){
    res.render('error',{error: erro, message: 'Erro ao recuperar os contratos'})
  })
});

module.exports = router;