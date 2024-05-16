var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')

// Apanha contratos e suas possiveis queries
router.get('/', function(req, res) {
  if (req.query.entidade) {
    Contrato.listByEntidade(req.query.entidade)
    .then(function(data) {
      res.jsonp(data);
    })
    .catch(function(erro) {
      res.status(500).jsonp({ error: 'Ocorreu um erro ao buscar os contratos.', details: erro });
    });
  }else if (req.query.tipo){
    Contrato.listByTipo(req.query.tipo)
    .then(function(data) {
      res.jsonp(data);
    })
    .catch(function(erro) {
      res.status(500).jsonp({ error: 'Ocorreu um erro ao buscar os contratos.', details: erro });
    });
  }else{
    Contrato.list()
    .then(function(data){
      res.jsonp(data)
    })
    .catch(function(erro){
      res.jsonp(erro)
    })
  }
});

router.get('/:id', function(req, res) {
  Contrato.findById(req.params.id)
  .then(function(data){
    res.jsonp(data)
  })
  .catch(function(erro){
    res.jsonp(erro)
  })
});


module.exports = router;