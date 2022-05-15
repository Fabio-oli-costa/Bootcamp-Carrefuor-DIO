/* Exercício 1 */
/*
function somaNums (arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNums(arr));
*/

/* Exercício 2*/

const lista = [
    {
        name:'sabao em po',
        preco: 30 
    },
    {
        name:'ceral',
        preco: 12
    },
    {
        name:'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));