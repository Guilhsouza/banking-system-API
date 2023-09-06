const sistema = require('../bancodedados')

const listarContas = (req, res) => {
    return res.status(200).json(sistema.contas)
}

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'estão faltando informações necessárias!' })
    }

    let numero = 1

    if (sistema.contas.length > 0) {
        numero = sistema.contas[sistema.contas.length - 1].numero + 1
    }

    const novaConta = {
        numero: numero,
        saldo: 0,
        usuario:
        {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    }

    sistema.contas.push(novaConta)

    return res.status(204).send()
}

const editarConta = (req, res) => {
    const { numeroConta } = req.params
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: 'estão faltando informações necessárias!' })
    }

    const contaEspec = sistema.contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })

    const contaModificada = {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha
    }

    contaEspec.usuario = contaModificada

    return res.status(204).send()
}

const deletarConta = (req, res) => {
    const { numeroConta } = req.params

    const contaEspec = sistema.contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })

    if (!(contaEspec.saldo === 0)) {
        return res.status(400).json({ "mensagem": "A conta só pode ser removida se o saldo for zero!" })
    }

    const indiceConta = sistema.contas.indexOf((conta) => {
        return conta.numero === Number(numeroConta)
    })

    sistema.contas.splice(indiceConta, 1)

    return res.status(204).send()
}

module.exports = {
    listarContas,
    criarConta,
    editarConta,
    deletarConta
}