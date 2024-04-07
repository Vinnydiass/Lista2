/* 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.


[
    {
        "nome": "Porcelanato",
        "codigo": 1,
        "preço": 20.36
    },
    {
        "nome": "Cimento",
        "codigo":2,
        "preço":40.36
    },
    {
        "nome": "Argamassa",
        "codigo":3,
        "preço":50.76
    },
]
.......
*/


app.post('/exercicio7', (req, res) => {
   
    const corpo = req.body


    let listaProdutos = []
    console.log(listaProdutos)
   
    corpo.forEach(produto => {
        console.log(produto)
        listaProdutos.push(produto)
    });


    let soma = 0
    listaProdutos.forEach(produto => {
        soma = soma + produto.preço
    })
   
    const media = soma / listaProdutos.length
   
    let maiorPreço = 0


    listaProdutos.forEach(produto =>{
        if (produto.preço > maiorPreço){
            maiorPreço = produto.preço
        }
    })


    const resultado = {
        preçoMedia: media.toFixed(2),
        maiorPreço: maiorPreço
    }
    res.json(resultado)
})
