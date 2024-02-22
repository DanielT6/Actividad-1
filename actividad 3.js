let temperatura = 40;
if (temperatura >= 40){
    console.log ('usted tiene fiebre, su temperatura es mayor a ${temperatura} grados')
}



let tipoCliente = "normal";
if(tipoCliente == "normal"){
    console.log('ca a ser atendido en el modulo 1, por ser cliente $(tipoCliente)');
}else if(tipoCliente == "preferencial"){
    console.log("esta habilitado los módulos 2 y 3 para su atención");
}else{
    console.log("usted no es cliente del bacno, por favor dirijase al modulo 4");
}



let emailBaseDatos = "arleth64@gmail.com";
let claveBaseDatos = "1234*";
let emailIngresado = "arle@gmail.com";
let claveIngresada = "1234*";
let nombreUsuario = "Juan";

if(emailBaseDatos == emailIngresado && claveBaseDatos == claveIngresada);{
    console.log('${nombreUsuario} Bienvevido!, seleccione opciones del sistema');
}{
    console.log('Acceso denegado..');
}



let derecha = true;
let izquierda = false;
let arriba = false
let abajo = false;

if(derecha){
    console.log("robot moviendose hacia la derecha");
}else if(izquierda){
    console.log("robot moviendose hacia la izquierda");
}else if(arriba){
    console.log("robot moviendose hacia abajo");
}else{
    console.log("movimiento extraño");
}



let encendido = true;
let velocidad = 32;
let(encendido);
    console.log('Su carro esta encendido');
    if(velocidad == 0){
        console.log('carro freno');
    }else if(velocidad >0 && velocidad <= 100){
        console.log('carro en marcha..')
    }else if(velocidad > 100){
        console.log('evitese un accidente .. exceso de velocidad')
    }else{
        console.log('Encienda su vehiculo..');
}



let dia = "miercoles";
let clase = "Algotirmos";
if(dia == "miercoles"){
    console.log('la clase de hoy es ${clase}');
}