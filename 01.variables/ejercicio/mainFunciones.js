function suma(numero1, numero2) {
    console.log('función suma iniciar')

    let numero01 = 4
    let numero02 = 6

    const respuesta = numero01 + numero02

    console.log(`Respuesta: ${respuesta} `)

    console.log('función suma termina ')
}

suma()

const resta = function () {
    console.log('Inicia funcion resta')
    let numero01 = 45
    let numero02 = 13
    const respuesta = numero01 - numero02

    console.log(`Respuesta: ${respuesta}`)
    console.log('fin funcion resta')

}

resta()

function multiplicar(numero01, numero02) {
    if (isNaN(numero01) || isNaN(numero02)) {
        throw new Error('Los parámetros debenb ser números')
    }

    const respuesta = numero01 * numero02

    console.log(`Respuesta: ${respuesta}`)
}

multiplicar('5', 9)
