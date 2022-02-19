//ARRAYS 


//ADICIONANDO ELEMENTOS EM UM ARRRAY USANDO O  (LENGHT)


const alunos = ["Rani", "Cristina", "Edu","Maria"]
alunos[alunos.length] = "Gio"

console.log(alunos) // Foi adicionado Gio no array alunos

//----------------------------------------------------------
//ADICIONANDO ELEMENTOS EM UM ARRRAY USANDO O  (PUSH)

const alunos = ["Rani", "Cristina","Edu","Maria"]
alunos.push("Lari")

console.log(alunos) // Foi adicionado Lari no array alunos

//------------------------------------------------------------

//ADICIONADO O ELEMENTO EM PRIMEIRO NO ARRAY USANDO (UNSHIFT)

const alunos = ["Rani", "Cristina","Edu","Maria"]
const adicionadoAluno = alunos.unshift("Eu Sou")

console.log(alunos)// Foi adicionado Eu sou no inicio do array alunos


//----------------------------------------------------------

//QUANDO SOUBER A POSIÇÃO DO ELEMENTO E QUISER TROCAR POR OUTRO ELEMENTO 
const alunos = ["Rani", "Cristina","Edu","Maria"]
const novoAluno = ("Gabi")

alunos[3] = novoAluno
console.log(alunos) //trocou o indice 3 que era Maria por Gabi

//-------------------------------------------------------------

        //REMOVENDO ELEMENTOS DO ARRAY

//REMOVENDO O ELEMENTO DO INICIO DO ARRAY USANDO O (SHIFT)

const alunos = ["Rani", "Cristina","Edu","Maria"]
alunos.shift()

console.log(alunos)// Foi removido Rani do inicio do array alunos

//---------------------------------------------------------------

// REMOVENDO O ELEMENTO FINAL DO ARRAY USANDO O (POP)

const alunos = ["Rani", "Cristina","Edu","Maria"]
alunos.pop()

console.log(alunos)// Foi removido Maria do final do array alunos

//------------------------------------------------------------------

// CASO NÃO QUEIRA QUE OS INDICES SEJAM ALTERADOS  APÓS USAR O POP USE:

const alunos = ["Rani", "Cristina","Edu","Maria"]

delete alunos[2] //USANDO O DELETE VOCÊ DEIXA O INDICE DOIS VAZIO NÃO SOFRENDO ALTERAÇÃO NOS OUTROS ÍNDICES

console.log(alunos)//Retornou o array com o indice 2 vazio, porém todos os outros elementos no mesmo indice a qual estavam antes

//--------------------------------------------------------------------

//PARA PEGAR UM ÍNDICE QUALQUER ESPECIFICO USE:

const alunos = ["Rani", "Cristina","Edu","Maria"]
console.log(alunos[3])// retornou o indice 3 que é Maria

//-----------------------------------------------------------------

// CASO QUEIRA PEGAR UMA "FATIA" DE ELEMNTO USE O (SLICE)

const alunos = ["Rani", "Cristina","Edu","Maria","Manu","Luiz","Gio"]
console.log(alunos.slice(0,3)) //o SLICE neste exemplo irá pegar os elementos do indice 0 até o 2

//----------------------------------------------------------------------

// CASO QUEIRA PEGAR UMA "FATIA" DE ELEMNTO SÓ QUE DE TRÁS PRA FRENTE, USE O (SLICE só que negativo) 

const alunos = ["Rani", "Cristina","Edu","Maria","Manu","Luiz","Gio"]
console.log(alunos.slice(0,-2)) // irá pegar todos menos os dois últimos índices

//---------------------------------------------------------------------/