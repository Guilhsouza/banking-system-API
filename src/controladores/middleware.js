const sistema = require('../bancodedados')
const { format } = require('date-fns')

const validacao = (req, res, next) => {
    const { senha_banco } = req.query
    const senhaOriginal = sistema.banco.senha

    if (!senha_banco || senhaOriginal !== senha_banco) {
        return res.status(403).json({ mensagem: 'A senha do banco informada é inválida!' })
    }

    next()
}

const validarInformacoesUsuario = (req, res, next) => {
    const { cpf, data_nascimento, telefone, email } = req.body

    const EmailTemArroba = email.indexOf('@')

    if (EmailTemArroba === -1) {
        return res.status(400).json({ mensagem: 'E-mail inválido!' })
    } else {
        const temPonto = email.indexOf('.', EmailTemArroba)

        if (temPonto === -1 || temPonto === email.length || temPonto === (EmailTemArroba + 1)) {
            return res.status(400).json({ mensagem: 'E-mail inválido!' })
        }
    }

    if (!(telefone.length === 11)) {
        return res.status(400).json({ mensagem: 'Número de telefone inválido' })
    }

    if (!(cpf.length === 11)) {
        return res.status(400).json({ mensagem: 'CPF inválido' })
    }

    const cpfCadastrado = sistema.contas.find((conta) => {
        return conta.usuario.cpf === cpf
    })

    const emailCadastrado = sistema.contas.find((conta) => {
        return conta.usuario.email === email
    })

    if (cpfCadastrado || emailCadastrado) {
        return res.status(400).json({ mensagem: ' o CPF ou o E-mail já está cadastrado em outra conta!' })
    }

    next()
}

const verificarContaExistente = (req, res, next) => {
    const { numeroConta } = req.params

    const contaEspec = sistema.contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })

    if (!contaEspec) {
        return res.status(404).json({ mensagem: `A conta de número: ${numeroConta} não foi encontrada no sistema!` })
    }

    next()
}

module.exports = {
    validacao,
    validarInformacoesUsuario,
    verificarContaExistente
}