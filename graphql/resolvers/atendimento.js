const Operacoes = require('../../infraestrutura/operations')

const Atendimentos = new Operacoes('atendimento')

const resolvers = {
    Mutation: {
        adicionarAtendimento: (root, params) => Atendimentos.adiciona(params),
        atualizarAtendimento: (root, params) => Atendimentos.atualiza(params),
        deletarAtendimento: (root, {id}) => Atendimentos.deleta(id)
    },

    Query: {
        atendimentos: () => Atendimentos.lista(),
        atendimento: (root, {id}) => Atendimentos.buscaPorId(id)
    }
}

module.exports = resolvers