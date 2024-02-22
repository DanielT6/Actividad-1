let edad = 9

edad >= 18 ? console.log("Es mayor de edad"): console.log("Es menor de edad")


let numero = -3

numero > 0 ? console.log ("número positivo") : console.log("número negativo")


let ocupaciónCancha = true
let nombreCancha = "Bernabeu"

let mensaje = ocupaciónCancha ? `la cancha llamada ${nombreCancha} esta ocupada"`:
`la cancha llamada ${nombreCancha} esta disponible"`
console.log(mensaje)


const email = "arleth64@gmail.com";
const contrasela = "1234";

email == "arleth64@gmail.com" && contraseña == "1234" ?
console.log('señor usuario con correo ${email} Bienvenido al sistema') : 
console.log('El correo ${email} y la contraseña digitada es incorrecta')


let colorSemaforo = "amarillo";
colorSemaforo == "verde"? console.log('El semaforo esta en ${colorSemaforo}, puede seguir'):
colorSemaforo == "rojo"? console.log('El semaforo esta en ${colorSemaforo}, debe parar'):
colorSemaforo == "amarillo" ? console.log("aliste motores"):
console.log('muestre color ${colorSemaforo}, esta dañado')