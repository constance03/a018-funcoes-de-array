//Crie duas funcões que recebem como parâmetro um objeto.
const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
function caixaAlta (objeto) {
    for (elementos in objeto) {
        objeto[elementos] = objeto[elementos].toUpperCase()
    }
    return objeto[elementos]
}

console.log(caixaAlta(objeto));

// A segunda deve retornar os valores do objeto como texto corrido.
function textoCorrido (objeto) {
    let text = ""
    for (elementos in objeto) {
        text += `${objeto[elementos]} `
    }
    return text.trim()
}

console.log(caixaAlta(objeto));


// Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
//A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
function recebeCallback(objeto, funcao1, funcao2) {
    funcao1(objeto)
    funcao2(objeto)
}

console.log(objeto, caixaAlta, textoCorrido);

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo script.js, e a funcão 1. 
// Repita o processo para a funcão 2
