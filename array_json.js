/***************
 * 
 * Objetivo: Manipular dados utilizando Array e JSON
 * Data: 05?03/2026
 * autor: Hugo
 * Versão: 1.0
 */


/* [] --> representa um objeto do tipo array
   {} --> representa um objeto tipo json

   Array -> é um objeto na memória que permite tranalhar com varios valores 
            em um único objeto

        let nome    = 'jose'
        let nome2   = 'maria'
        let nom3    = 'carlos'

                indice      0       1        2
        let nome    =   ['jose', 'maria', 'carlos']        

    JASON -> É um objeto na memoria que permite trabalhar com chave e valor

    let nome     =   'jose'
    let telefone =   '1234567'
    let email    =   'jose@gmail.com'


    let cliente = { 'nome': 'jose'
                    'telefone': '1234567'
                    'email': 'jose@gmail.com'
    
    }
*/

const listaNomes = ['arcanjo',
                    'nicolas',
                    'nicolas',
                    'henrique',
                    'kauan',
                    'caua', 
                    'miguel',
                    'kaiky', 
                    'rafael',
                    'pietro']
const listaCliente    = []
const listaDeFornecedores= []


const exibirDados = function(){

    //Exibe o objeto array e seu conteudo
    console.table (listaNomes)

    //exibe o objeto array em formato de tabela com seus indices
    console.table(listaNomes)

    //exibe apenas o valor respectivo indice do array
    console.table(listaNomes[1])
    
    //retorna um indice de dados do tipo array
    console.table(typeof(listaNomes[4])


    //exibe um nome 
    // console.table(`O nome do cliente é: ${listaNomes[0]}`)
    // console.table(`O nome do cliente é: ${listaNomes[1]}`)
    // console.table(`O nome do cliente é: ${listaNomes[2]}`)
    
/************
    estruturas de repetição
    while

    let cont = 0;
    while(cont <= 4){
        console.table(`O nome do cliente é: ${listaNomes[3]}`)
        cont++

    }
 ************/


/*************** 
estruturas de repetição
    for

    for(let cont = 0; cont <= 4; cont++){
        console.table(`O nome do cliente é: ${listaNomes[3]}`)
      cont++
    }

******************/

     //estruturas de repetição
    //  console.table('---------------FOR EACH----------------')
    // listaNomes.forEach(function(cliente){
    //     console.table(`O nome do cliente é: ${cliente}`)
    // })


/**************  
 estruturas de repetição
    for in


    for(item in listaNomes){
        console.table(`o nome do cliente é:  ${listaNomes[item]}`)
    }
*************/

/***************
estruturas de repetição
    for of


    for (cliente of listaNomes){
        console.log(`o nome do cliente é:  ${cliente}`)
    }
******************/
)}


const manipularDados = function(){

    listaCliente[0] = 'josé da Silva'
    listaCliente[1] = 'maria da Silva'
    listaCliente[2] = 'joao martines'

    console.table(listaCliente)

    //o push permite add novos valores no array sempre no final da lista
    listaDeFornecedores.push('Cheshire')
    listaDeFornecedores.push('Fllyn diss')
    listaDeFornecedores.push('Brutal da Silva')
    listaDeFornecedores.push('claus da silva')
    listaDeFornecedores.push('vordx souzas')

    console.table (listaDeFornecedores)

    // o unshift sempre add novos valores sempre no inicio da lista
    listaDeFornecedores.unshift('Lilian cardosa')
    console.table(listaDeFornecedores)


    // Ele remove elementos do final da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    // ele remove o conteudo do inicio da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    // permite remover um elemento baseado no indice da lista
            // splice (indice, qtde elementos)
    listaDeFornecedores.splice(2,1)
    console.table(listaDeFornecedores)

    // splice() -> permite remover um elemento baseado no indice em um determinado lugar no array
    listaDeFornecedores.splice(2,0, 'carlos da silva')
    tabela.table(listaDeFornecedores)

}
const removerItem = function(nome){

    // retorna o indice de um elemento fazendo a busca pelo valor
        //  se o indexof nao encontrar o conteudo ele retorna -1
    let indice = listaNomes.indexOf(nome)
    if (indice != -1){
        listaNomes.splice(indice, 1)
        return true
    }
    console.log(indice)

//     for(indice in listaNomes){
//         if(listaNomes[indice] == nome){
//             listaNomes.splice(indice,1)
//         }
//     }
}
const verificarItem = function(nome){

    // include verifica a existencia de um conteudo dentro de uma lista (true/false)
    return listaNomes.includes(nome)
}
const qtdeDados = function(nome){
    let cont = 0;
    listaNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase()){
            cont++
        }
    });

    return cont
}
const criandoDadosJson = function(){
    let aluno = {"nome": "jose",
                 "ra":123456,
                 "telefone": 973024242,
                 "email": "jose@gmail.com"}

    // exibe o objeto do json com a tabela
    console.table(aluno)
    // exibe o objeto json completo
    console.log(aluno)


        // add novo elemento 
    aluno.sexo = 'masculino'
        console.log

        // remove um elemento 
        delete aluno.telefone
        console.log(aluno)
}
const cadastroDeProdutos = function(){
    
}