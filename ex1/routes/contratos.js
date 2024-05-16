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

router.get('/entidades', function(req, res) {
  Contrato.listEntidades()
  .then(function(data){
    res.jsonp(data)
  })
  .catch(function(erro){
    res.jsonp(erro)
  })
});

router.get('/tipos', function(req, res) {
  Contrato.listTiposProcedimento()
  .then(function(data){
    res.jsonp(data)
  })
  .catch(function(erro){
    res.jsonp(erro)
  })
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

router.post('/', function(req, res) {
  Contrato.insert(req.body)
  .then(function(data){
    res.jsonp(data)
  })
  .catch(function(erro){
    res.jsonp(erro)
  })
});

router.delete('/:id', function(req, res) {
  Contrato.delete(req.params.id)
  .then(function(data) {
    res.jsonp(data)
  })
  .catch(function(erro) {
    res.jsonp(erro)
  })
})

router.put('/:id', function(req, res) {
  Contrato.update(req.params.id, req.body)
  .then(function(dados) {
    res.jsonp(dados)
  })
  .catch(function(erro) {
    res.jsonp(erro)
  })
})

module.exports = router;