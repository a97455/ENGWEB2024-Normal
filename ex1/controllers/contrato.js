var Contrato = require('../models/contrato')

module.exports.list = function(){
    return Contrato.find().sort({tipoprocedimento: 1}).exec()
}

module.exports.listByEntidade = function(nipc_entidade){
    return Contrato.find({NIPC_entidade_comunicante: nipc_entidade}).sort({tipoprocedimento: 1}).exec()
}

module.exports.listEntidades = function() {
    return Contrato.distinct("entidade_comunicante").sort().exec();
}

module.exports.listTiposProcedimento = function() {
    return Contrato.distinct("tipoprocedimento").sort().exec();
}

module.exports.listByTipo = function(tipoprocedimento){
    return Contrato.find({tipoprocedimento: tipoprocedimento}).sort({tipoprocedimento: 1}).exec()
}

module.exports.findById = function(id){
    return Contrato.findOne({_id: id}).exec()
}

module.exports.insert = function(contrato){
    return Contrato.create(contrato)
}

module.exports.update = function(id,contrato){
    return Contrato.updateOne({_id:id}, contrato)
}