function body_onLoad() {
	// Una vez que se haya cargado la página, se ejecuta este evento
}

function body_onUnLoad() {
	// Una vez que se haya descargado la página, se ejecuta este evento
}

function suma(numero_1, numero_2) {
	return numero_1 + numero_2;
}

function resta(numero_1, numero_2) {
	return numero_1 - numero_2;
}

function multiplica(numero_1, numero_2) {
	return numero_1 * numero_2;
}

function divide(numero_1, numero_2) {
	if (numero_2 == 0) {
		return 0;
	} else {
		return numero_1 / numero_2;	
	}
}

function intercambio(numero_1, numero_2) {
	var numero_3 = 0;

	//var mensaje = ("Antes: Num 1 es " + numero_1 + " y Num 2 es " + numero_2);
	var mensaje = (numero_1 + " " + numero_2);
	console.log(mensaje);
	//alert(mensaje);

	numero_3 = numero_2;
	numero_2 = numero_1;
	numero_1 = numero_3;

	//mensaje = ("Antes: Num 1 es " + numero_1 + " y Num 2 es " + numero_2);
	var mensaje = (numero_1 + " " + numero_2);
	console.log(mensaje);
	//alert(mensaje);
}

function saludo () {
	alert("Ola!!!");
}

// console.log("");