const sistema = require('../bancodedados')
const { format } = require('date-fns')

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body

    if (!numero_conta || valor === undefined) {
        return res.status(400).json({ mensagem: 'O número da conta e o valor são obrigatórios!' })
    }

    const conta = sistema.contas.find((conta) => {
        return conta.numero === numero_conta
    })

    if (!conta) {
        return res.status(404).json({ mensagem: 'A conta não foi encontrada!' })
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Não é possível fazer uma transação negativa ou zerada' })
    }

    const valorFormatado = (valor / 100)

    conta.saldo += Number(valorFormatado.toFixed(2))

    const data = format(new Date(), 'dd-MM-yyyy HH:mm:ss')

    const transacao = {
        data,
        numero_conta,
        valor
    }

    sistema.depositos.push(transacao)

    return res.status(204).send()
}

const sacar = (req, res) => {
    const { numero_conta, valor, senha } = req.body

    if (!numero_conta || valor === undefined || !senha) {
        return res.status(400).json({ mensagem: 'O número da conta, o valor e a senha são obrigatórios!' })
    }

    const conta = sistema.contas.find((conta) => {
        return conta.numero === numero_conta
    })

    if (!conta) {
        return res.status(404).json({ mensagem: 'A conta não foi encontrada!' })
    }

    const senhaConta = conta.usuario.senha

    if (senhaConta !== String(senha)) {
        return res.status(400).json({ mensagem: 'Senha incorreta!' })
    }

    const valorFormatado = valor / 100

    if (valorFormatado > conta.saldo) {
        return res.status(400).json({
            mensagem: `Saldo não suficiente para a transação de R$: ${(valor / 100).toFixed(2)}`
        })
    }

    const saldoAtual = conta.saldo - valorFormatado
    conta.saldo = saldoAtual

    const data = format(new Date(), 'dd-MM-yyyy HH:mm:ss')

    const transacao = {
        data,
        numero_conta,
        valor
    }

    sistema.saques.push(transacao)

    return res.status(200).send()
}

const transferir = (req, res) => {
    const { numero_conta_1, numero_conta_2, senha, valor } = req.body

    if (!numero_conta_1 || !numero_conta_2 || !senha || !valor) {
        return res.status(400).json({ mensagem: 'Estão faltando informações necessárias!' })
    }

    const procurarConta = (numeroConta) => {
        return sistema.contas.find((conta) => {
            return conta.numero === Number(numeroConta)
        })
    }

    const contaOrigem = procurarConta(Number(numero_conta_1))
    const contaDestino = procurarConta(Number(numero_conta_2))

    if (!contaOrigem || !contaDestino) {
        return res.status(404).json({ mensagem: 'Uma das contas não foi encontrada!' })
    }

    const senhaConta = contaOrigem.usuario.senha

    if (Number(senhaConta) !== senha) {
        return res.status(400).json({ mensagem: 'Senha incorreta!' })
    }

    const valorFormatado = (valor / 100)

    if (valorFormatado > contaOrigem.saldo) {
        return res.status(400).json({
            mensagem: `Saldo não suficiente para a transação de R$: ${(valor / 100).toFixed(2)}`
        })
    }

    contaDestino.saldo += Number(valorFormatado)
    contaOrigem.saldo -= Number(valorFormatado)

    const data = format(new Date(), 'dd-MM-yyyy HH:mm:ss')

    const transacao = {
        data,
        numero_conta_origem: numero_conta_1,
        numero_conta_destino: numero_conta_2,
        valor
    }

    sistema.transferencias.push(transacao)

    return res.status(204).send()
}

const saldo = (req, res) => {
    const { numero_conta, senha } = req.query

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: 'O número da conta ou a senha está incorreta!' })
    }

    const conta = sistema.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!conta) {
        return res.status(404).json({ mensagem: 'A conta não foi encontrada' })
    }

    if (conta.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Senha incorreta!' })
    }

    return res.status(200).json({ saldo: (conta.saldo).toFixed(2) })
}

const extrato = (req, res) => {
    const { numero_conta, senha } = req.query

    if (!numero_conta || !senha) {
        return res.status(400).json({ mensagem: 'O número da conta e a senha são necessarios!' })
    }

    const conta = sistema.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!conta) {
        return res.status(404).json({ mensagem: 'A conta não foi encontrada' })
    }

    const senhaConta = conta.usuario.senha

    if (senhaConta !== senha) {
        return res.status(400).json({ mensagem: 'Senha incorreta!' })
    }

    const saques = sistema.saques.filter((transacoes) => {
        return transacoes.numero_conta === Number(numero_conta)
    })
    const depositos = sistema.depositos.filter((transacoes) => {
        return transacoes.numero_conta === Number(numero_conta)
    })
    const transferenciasEnviadas = sistema.transferencias.filter((transacoes) => {
        return transacoes.numero_conta_origem === Number(numero_conta)
    })
    const transferenciasRecebidas = sistema.transferencias.filter((transacoes) => {
        return transacoes.numero_conta_destino === Number(numero_conta)
    })

    return res.status(200).json({
        saques,
        depositos,
        transferenciasEnviadas,
        transferenciasRecebidas
    })
}

module.exports = {
    depositar,
    sacar,
    transferir,
    saldo,
    extrato
}