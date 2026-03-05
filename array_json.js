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

const listaNomes = ['jose', 'maria', 'joao', 10, true]
const listaCliente    = []
const listaDeFornecedores= []


const exibirDados = function(){

    //Exibe o objeto array e seu conteudo
    console.log (listaNomes)

    //exibe o objeto array em formato de tabela com seus indices
    console.table(listaNomes)

    //exibe apenas o valor respectivo indice do array
    console.log(listaNomes[1])
    
    //retorna um indice de dados do tipo array
    console.log(typeof(listaNomes[4])


    //exibe um nome 
    // console.log(`O nome do cliente é: ${listaNomes[0]}`)
    // console.log(`O nome do cliente é: ${listaNomes[1]}`)
    // console.log(`O nome do cliente é: ${listaNomes[2]}`)
    
/************
    estruturas de repetição
    while

    let cont = 0;
    while(cont <= 4){
        console.log(`O nome do cliente é: ${listaNomes[3]}`)
        cont++

    }
 ************/


/*************** 
estruturas de repetição
    for

    for(let cont = 0; cont <= 4; cont++){
        console.log(`O nome do cliente é: ${listaNomes[3]}`)
      cont++
    }

******************/

     //estruturas de repetição
    //  console.log('---------------FOR EACH----------------')
    // listaNomes.forEach(function(cliente){
    //     console.log(`O nome do cliente é: ${cliente}`)
    // })


/**************  
 estruturas de repetição
    for in


    for(item in listaNomes){
        console.log(`o nome do cliente é:  ${listaNomes[item]}`)
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

    console.log(listaCliente)

    //o push permite add novos valores no array sempre no final da lista
    listaDeFornecedores.push('luiz da Silva')
    listaDeFornecedores.push('Brutal da Silva')
    listaDeFornecedores.push('Fllyn diss')

    console.log (listaDeFornecedores)
}
manipularDados()