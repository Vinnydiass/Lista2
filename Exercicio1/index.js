// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
// PATH PARAM


app.get('/exercicio1/:qtdMinima/:qtdMaxima', (req, res) => {
    const quantidadeMinima = Number(req.params.qtdMinima)
    const quantidadeMaxima = Number(req.params.qtdMaxima)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})