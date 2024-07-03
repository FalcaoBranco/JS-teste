// -------------------------------------

/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
  // @todo implementar retorno da operação aqui
  return (a + b) 
}
soma(10, 8) 
/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
  // @todo implementar retorno da operação aqui
  return (a * b)
}
multiplicacao(5,8)

/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
  // @todo implementar retorno da operação aqui
  return (a / b)
}
divisao(10,2)

/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
  // @todo implementar retorno da operação aqui
  return (a - b)
}
subtracao(7,5)
/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  // @todo implementar retorno da operação aqui
  return (a % b)
}
modulo(25,5)
/**
 * Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(a, b) {
  // @todo implementar retorno da operação aqui
  if (a > b) return (a)
  else return(b)
}
max(15,10)
max(10,15)
// -------------------------------------

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
  // @todo implementar retorno da operação aqui
  return `${a} ${b}`
}
strConcat("João Victor","Falcão Ribeiro")
// --------------------------------------

/**
 * Função que implementa controle de fluxo
 * 
 * @param {number} numero - O número em questão
 * @returns {string} 
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero) {
  // @todo implementar retorno da operação aqui
  if (numero > 10){
    return "Maior que 10"
  }
  else if (numero === 10){
    return "Igual a 10"
  }
  else {
    return "Menor que 10"
  }
}
retornaNumero(11)
retornaNumero(10)
retornaNumero(9)
// --------------------------------------

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num) {
  // @todo implementar retorno da operação aqui
  if (num >= 0){
    return (true)
  }
  else {
    return false
  }

}
ehPositivo(6)
ehPositivo(-10)

 module.exports = 
{ 
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
