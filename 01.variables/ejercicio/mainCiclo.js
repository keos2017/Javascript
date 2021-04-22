/*for(let i = 1 ; i <= 10 ; i++){
    console.log(i + " hola")
}

for(let i = 10 ; i >= 1 ; i-- ){
    console.log(i)
}

for(let i = 1, j = 2 ; i < 400; i *= j, j *= j){
    console.log(i, j)
}
console.log("Final del ciclo")*/

//do while
/*const tieneCoche = false
do {
    if (tieneCoche) {
        console.log("Puede salir a la fiesta")
    } else {
        console.error("No hay quien te lleve")
    }
} while (tieneCoche === true)

//while
while (tieneCoche === true)
    if (tieneCoche) {
        console.log("Puede salir a la fiesta")
    } else {
        console.error("No hay quien te lleve")
    }
*/


//*****************Ejemplo 2*******************

const archivo = "Bienvenido al curso de Javascript/"
// do while
let contador = 0
let letra = ''
let texto = ''
do {
    letra = archivo[contador]
    contador++
    texto += letra
} while (letra != '/')
console.log(texto)

//While
contador = 0
letra = ''
texto = ''
while (letra != '/') {
    letra = archivo[contador]
    contador++
    texto += letra
}
console.log(texto)