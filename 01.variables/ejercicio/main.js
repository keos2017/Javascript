let edad = 24

if (edad > 18) {
    console.log("Eres mayor de edad")
}else{
    console.error("No eres mayor de edad")
}

if(edad > 10 && edad < 18){
    console.log("Aun no estas en la universidad")
}else{
    console.log("Seguramente estas estudiando una carrera")
}

let tieneCoche = false

if(tieneCoche){
    console.log("Puedes manejar en la carretera")
}else{
    console.error("No puedes salir a manejar")
}


let objeto = "hoja"
switch(objeto){
    case "enemigo":
        console.log("Accion atacar")
    break

    case "piedra":
        console.log("Acción caida")    
    break

    case "animal":
        console.log("cocinal animal")
    break    

    default:
        console.log("Acción seguir camino")
}


let likes = 5

if(likes === 1){
    console.log(likes + ' like')
}else{
    console.log(likes + ' likes')
}

(likes === 1)? console.log(likes + ' like') : console.log(likes + ' likes')

console.log((likes ==1)? likes + " like " : likes + " likes")