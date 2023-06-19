// console.log('Olá, javascript!')

// var userName = 'Fernanda Gamarano'

// document.getElementById('userName').innerHTML = userName


// Variaveis //

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

// Operadores matemáticos //

// var n1 = 15
// var n2 = '5'

// convertendo a string pra num 
// var total = n1 + parseInt(n2)
// console.log(total)

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

// Operadores matemáticos  de comparação //

// var n1 = 15
// var n2 = '5'

// var resultdo = v1 === v3
// console.log(resultado)

// === igual estrito - Só retorna verdadeiro se o valor e o tipo comparados forem iguais.
// 3==='3' //false
// 3===3 //true

// == igual - Retorna verdadeiro se os valores comparados forem iguais.
// 1=='1' //true

// != diferente - Retorna verdadeiro se os valores comparados não forem iguais.
// 4!=1 //true

// !== diferente estrito - Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// > maior que - Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
// 1>2 //false
// 5>3 //true
// 4>'1' //true

// < menor que - Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
// 1<2 //true
// 5<3 //false
// 4<'1' //false   

// Funções //

// function soma (n1, n2){
//     return(n1 + n2)
// }
// var resultado = soma(5, 5)
//console.log(resultado)

// function boasVindas (){
//     alert('Sejam bem vindos!')
// }
// boasVindas()

// controle de fluxo //

// var saldo = 1000

// function saque(valor) {
//     if (valor < saldo){
//         console.log('valor do saque inferior ao saldo')
//     }else if (valor > 700) {
//         console.log('valor do saque é superior ao maximo permitido por operação')
//     }else {
//         saldo = saldo - valor
//     }
// }

// saque(701)
// console.log(saldo)

// Array //

// var personagens = [
//     'Mestre Yoda',
//     'Luke Skywalker',
//     'Princesa Leia',
//     'Darth Vader'
// ]
//console.log(typeof personagens)
// inicia sempre com 0

//adiona um item no array
// personagens.push('C3pO')
// personagens.push('R2D2')
// console.log(personagens)

// retira o ultimo item da lista
// personagens.pop()
// console.log(personagens)

//remove um determinado item da lista
// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })
// console.log(personagens)

// controles de repetição (Loops)

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader' ]

// personagens.forEach(function(p){
//     console.log(p)
// })

// for ( var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
// codigo vai ser executado até a condição retornar false
// }

// Objestos - Super variaveis //

// var yoda = {}
// console.log(yoda)
// os campos não exitem mas me dão a possibilidade de criar novas informações
// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true
// console.log(yoda)

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`a idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }
// console.log(yoda)
// yoda.mostraIdade()

// Constantes //

// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)
// não muda 