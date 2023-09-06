const { Router } = require('express')
const controladorConta = require('./controladores/controladoresContas')
const controladorTransacoes = require('./controladores/controladoresTransacoes')
const middleware = require('./controladores/middleware')

const router = Router()

router.post('/contas', middleware.validacao, middleware.validarInformacoesUsuario, controladorConta.criarConta)
router.get('/contas', middleware.validacao, controladorConta.listarContas)
router.put('/contas/:numeroConta/usuario', middleware.validacao, middleware.validarInformacoesUsuario, middleware.verificarContaExistente, controladorConta.editarConta)
router.delete('/contas/:numeroConta', middleware.validacao, middleware.verificarContaExistente, controladorConta.deletarConta)

router.post('/transacoes/depositar', controladorTransacoes.depositar)
router.post('/transacoes/sacar', controladorTransacoes.sacar)
router.post('/transacoes/transferir', controladorTransacoes.transferir)

router.get('/contas/saldo', controladorTransacoes.saldo)
router.get('/contas/extrato', controladorTransacoes.extrato)

module.exports = router
