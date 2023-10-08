// Implementar comando de repetição (de 1 até 20)

// Implementar os comandos de decisão para verificar números quadrados pares ou ímpares

let pares = 0
let impares = 0

for (let number = 1; number <= 20; number = number + 1) {
    const quadrado =  number**2
    console.log(quadrado);

    if (quadrado % 2 === 0) {
        pares = pares + quadrado
    } else {
        impares = impares + quadrado
    }    
}

console.log(`A soma de quadrados pares: `, pares)
console.log(`A soma de quadrados ímpares: `, impares)
