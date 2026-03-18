/***************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Autor: Hugo
 * Versão: 1.0
 ***************/

const listaNomes = [
    'arcanjo','nicolas','nicolas','henrique',
    'kauan','caua','miguel','kaiky','rafael','pietro'
]

const listaCliente = []
const listaDeFornecedores = []

const exibirDados = function(){

    console.table(listaNomes)
    console.table(listaNomes)
    console.log(listaNomes[1])

    console.log(typeof(listaNomes[4]))

    listaNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })
}

const manipularDados = function(){

    listaCliente[0] = 'josé da Silva'
    listaCliente[1] = 'maria da Silva'
    listaCliente[2] = 'joao martines'

    console.table(listaCliente)

    listaDeFornecedores.push('Cheshire')
    listaDeFornecedores.push('Fllyn diss')
    listaDeFornecedores.push('Brutal da Silva')
    listaDeFornecedores.push('claus da silva')
    listaDeFornecedores.push('vordx souzas')

    console.table(listaDeFornecedores)

    listaDeFornecedores.unshift('Lilian cardosa')
    console.table(listaDeFornecedores)

    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    listaDeFornecedores.splice(2,1)
    console.table(listaDeFornecedores)

    listaDeFornecedores.splice(2,0,'carlos da silva')
    console.table(listaDeFornecedores)
}

const removerItem = function(nome){
    let indice = listaNomes.indexOf(nome)

    if(indice != -1){
        listaNomes.splice(indice,1)
        return true
    }

    return false
}

const verificarItem = function(nome){
    return listaNomes.includes(nome)
}

const qtdeDados = function(nome){
    let cont = 0

    listaNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase()){
            cont++
        }
    })

    return cont
}

const criandoDadosJson = function(){
    let aluno = {
        nome: "jose",
        ra: 123456,
        telefone: 973024242,
        email: "jose@gmail.com"
    }

    console.table(aluno)
    console.log(aluno)

    aluno.sexo = 'masculino'
    console.log(aluno)

    delete aluno.telefone
    console.log(aluno)
}

const cadastroDeProdutos = function(){

    let cores = [
        {"id":1,"cor":"branco"},
        {"id":2,"cor":"preto"},
        {"id":3,"cor":"azul"},
        {"id":4,"cor":"rosa"},
        {"id":5,"cor":"cinza"}
    ]

    let marca = [
        {"id":1,"marcas":"LG"},
        {"id":2,"marcas":"Lenovo"},
        {"id":3,"marcas":"Apple"},
        {"id":4,"marcas":"Dell"},
        {"id":5,"marcas":"Razer"},
        {"id":6,"marcas":"Logitech"},
        {"id":7,"marcas":"Multilaser"}
    ]

    let produto = [
        {
            "id":1,
            "nome":"monitor",
            "descricao":"27 polegadas",
            "marca":[marca[1].marcas],
            "qtde":20,
            "cor":[cores[4],cores[1],cores[3],cores[2]],
            "valor":800.50
        },
        {
            "id":2,
            "nome":"teclado",
            "descricao":"mecanico RGB",
            "marca":[marca[5].marcas],
            "qtde":200,
            "cor":cores,
            "valor":130.80
        },
        {
            "id":3,
            "nome":"mouse",
            "descricao":"sem fio",
            "marca":[marca[5].marcas, marca[0].marcas, marca[1].marcas],
            "qtde":800,
            "cor":[cores[1],cores[0],cores[4]],
            "valor":86.80
        }
    ]

    console.table(produto)

    console.log('----------------------------')

    produto.forEach(function(itemProduto){

        console.log('Produto: ' + itemProduto.nome)
        console.log('Quantidade: ' + itemProduto.qtde)
        console.log('Valor: ' + itemProduto.valor)

        console.log('Marcas:')
        itemProduto.marca.forEach(function(itemMarca){
            console.log(itemMarca)
        })

        console.log('Cores:')
        itemProduto.cor.forEach(function(itemCor){
            console.log(itemCor.cor)
        })

    })

    console.log('----------------------------')

    // pesquisando um produto pelo nome 
    let nome = 'mouse'

    produto.forEach(function(nomeProduto){
        if (String(nomeProduto.nome).toUpperCase() == String(nome).toUpperCase()){
            console.log(nomeProduto)
        }
    })

    console.log('----------------------------')

    // pesquisando produto pela cor
    let cor = 'preto'
    let status = false

    produto.forEach(function(itemProduto){
        itemProduto.cor.forEach(function(corItem){
            if (String(corItem.cor).toUpperCase() == String(cor).toUpperCase()){
                console.log(itemProduto)
                    status = true
            }
        })
    })

    if(!status)
        console.log('Item pesquisando não foi encontrado...')
}

cadastroDeProdutos()