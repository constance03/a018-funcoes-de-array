//Crie um array de números que contenha 8 números. 
//Depois disso, utilize este array para criar duas funcões de array map():
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

//A primeira deve retornar um novo array contendo os números múltiplicados por 3, 
//Crie uma const triplos, e guarde o valor do array nesta const;
const array3x = numeros.map((numero) => {
    const multiplicados = numero*3
    return multiplicados
})

console.log(array3x);

//A segunda deve retornar um novo array contendo os números divididos por 2. 
//Crie uma const metades, e guarde o valor do array nesta const;
const arrayDivisao = numeros.map((numero) => {
    const divisao = numero/2
    return divisao
})

console.log(arrayDivisao);
