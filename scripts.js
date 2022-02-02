class Mascota {

    constructor(nombreDueño, nombre, tamaño, peso, edad) {

        this.nombreDueño = nombreDueño;
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.peso = parseFloat(peso);
        this.edad = parseInt(edad);

    }

    calcularPeso() {

        switch (this.tamaño) {
            case "pequeño":

                if (this.peso < 10) {

                    alert(this.nombre + " esta dentro del peso aceptable, no te preocupes");

                } else if (this.peso >= 10) {

                    alert(this.nombre + " tiene un poco de sobre peso, toma en cuenta iniciar una dieta");

                } else if (this.peso >= 20) {

                    alert(this.nombre + " tiene un problema serio de sobrepeso, debes controlar su salud e iniciar una dieta urgentemente");

                }

                break;

            case "mediano":

                if (this.peso < 10) {

                    alert(this.nombre + " esta un poco denutrida, debes darle una mejor alimentación");

                } else if (this.peso >= 10) {

                    alert(this.nombre + " esta dentro del peso aceptable, no te preocupes");

                } else if (this.peso >= 20) {

                    alert(this.nombre + " tiene un poco de sobre peso, toma en cuenta iniciar una dieta");

                }

                break;

            case "grande":

                if (this.peso < 10) {

                    alert(this.nombre + " tiene una desnutrición grave, debes iniciar un proceso de nutrición urgentemente");

                } else if (this.peso >= 10) {

                    alert(this.nombre + " tiene un poco de desnutrición, toma en cuenta aplicar una mejor alimentación ");

                } else if (this.peso >= 20) {

                    alert(this.nombre + " esta dentro del peso aceptable, no te preocupes");

                }

                break;
        }

    }

    calcularEdad() {

        switch (this.tamaño) {
            case "pequeño":

                if (this.edad < 5) {

                    alert(this.nombre + " esta joven aun, tiene la edad de un niño o adolescente, no te preocupes");

                } else if (this.edad <= 10) {

                    alert(this.nombre + " tiene la edad de una persona adulta");

                } else if (this.edad <= 16) {

                    alert(this.nombre + " es equivalente a una persona de tercera edad, debes cuidarla mucho");

                } else if (this.edad > 16) {

                    alert(this.nombre + " no debería ni estar viva, ¿¡que has hecho!?");

                }

                break;

            case "mediano":

                if (this.edad < 3) {

                    alert(this.nombre + " esta joven aun, tiene la edad de un niño o adolescente, no te preocupes");

                } else if (this.edad <= 8) {

                    alert(this.nombre + " tiene la edad de una persona adulta");

                } else if (this.edad <= 14) {

                    alert(this.nombre + " es equivalente a una persona de tercera edad, debes cuidarla mucho");

                } else if (this.edad > 14) {

                    alert(this.nombre + " no debería ni estar viva, ¿¡que has hecho!?");

                }

                break;

            case "grande":

                if (this.edad < 2) {

                    alert(this.nombre + " esta joven aun, tiene la edad de un niño o adolescente, no te preocupes");

                } else if (this.edad <= 7) {

                    alert(this.nombre + " tiene la edad de una persona adulta");

                } else if (this.edad <= 13) {

                    alert(this.nombre + " es equivalente a una persona de tercera edad, debes cuidarla mucho");

                } else if (this.edad > 13) {

                    alert(this.nombre + " no debería ni estar viva, ¿¡que has hecho!?");

                }

                break;
        }

    }

    cambiarTamaño(tamaño) {

        this.tamaño = tamaño;

    }

    cambiarPeso(peso) {

        this.peso = parseFloat(peso);

    }

    cambiarEdad(edad) {

        this.edad = parseInt(edad);

    }

    salir() {

        return true;

    }

}

var nombreValor;
var nombreMValor;
var edadValor;
var pesoValor;
var tamañoValor;


var mascotas = [];

var mascota = new Mascota;

var nombre = document.getElementById('nombreDueño');
var nombreM = document.getElementById('nombreMascota');
var edad = document.getElementById('edadMascota');
var peso = document.getElementById('pesoMascota');
var tamaño = document.getElementById('tamañoMascota');

var btnAgregar = document.getElementById('btn-Agregar');
var btnEliminar = document.getElementsByClassName('btn-Eliminar');
var btnReiniciar = document.getElementById('btn-Reiniciar');

var nombre = document.getElementById('nombreDueño');
var cantidad = document.getElementById('cantidadMascota');

nombre.onchange = () => {
    nombreValor = nombre.value;
};

nombreM.onchange = () => {
    nombreMValor = nombreM.value;
};

edad.onchange = () => {
    edadValor = edad.value;
};

peso.onchange = () => {
    pesoValor = peso.value;
};

tamaño.onchange = () => {
    tamañoValor = tamaño.value;
};

btnAgregar.addEventListener('click', () => {

    if (!!nombreValor && !!nombreMValor && !!edadValor && !!pesoValor && !!tamañoValor) {

        crearMascota();

    } else {

        alert("rellena todos los campos por favor");

        return;
    }

    document.getElementById('div').innerHTML = '';

    for (let i = 0; i < mascotas.length; i++) {

        var nombreDueñoHTML = document.createElement('h3');
        nombreDueñoHTML.className = "mascota__nombreDueño";
        nombreDueñoHTML.innerHTML = `${mascotas[i].nombreDueño}`;

        var nombreMHTML = document.createElement('h4');
        nombreMHTML.className = "mascota__nombre";
        nombreMHTML.innerHTML = `Mascota: <p class="mascota__nombre__texto">${mascotas[i].nombre}</p>`;

        var edadHTML = document.createElement('h4');
        edadHTML.className = "mascota__edad";
        edadHTML.innerHTML = `Edad: <p class="mascota__edad__texto">${mascotas[i].edad}</p>`;

        var pesoHTML = document.createElement('h4');
        pesoHTML.className = "mascota__peso";
        pesoHTML.innerHTML = `Peso: <p class="mascota__peso__texto">${mascotas[i].peso}</p>`;

        var tamañoHTML = document.createElement('h4');
        tamañoHTML.className = "mascota__tamaño";
        tamañoHTML.innerHTML = `Tamaño: <p class="mascota__tamaño__texto">${mascotas[i].tamaño}</p>`;

        var divHTML = document.createElement('div');
        divHTML.className = "mascota";

        divHTML.appendChild(nombreDueñoHTML);
        divHTML.appendChild(nombreMHTML);
        divHTML.appendChild(edadHTML);
        divHTML.appendChild(pesoHTML);
        divHTML.appendChild(tamañoHTML);

        document.getElementById('div').appendChild(divHTML);

    }


})

btnReiniciar.addEventListener('click', () => {

    document.getElementById('div').innerHTML = '';

    for (let i = mascotas.length; i > 0; i--) {
        mascotas.pop();
      }
      
})

function crearMascota() {

    mascotas.push(new Mascota(nombreValor, nombreMValor, tamañoValor, pesoValor, edadValor));

    vaciarCampos();

}

function vaciarCampos() {

    document.getElementById('nombreDueño').value = '';
    document.getElementById('nombreMascota').value = '';
    document.getElementById('edadMascota').value = '';
    document.getElementById('pesoMascota').value = '';
    document.getElementById('tamañoMascota').value = '';

    nombreValor = '';
    nombreMValor = '';
    edadValor = '';
    pesoValor = '';
    tamañoValor = '';

}

// function mostrarDatos(nombreValor,nombreMValor,edadValor,pesoValor,tamañoValor) {



// }



// cantidad.onchange = () => {

//     var nombreMascotaHTML = document.createElement('h4');
//     nombreMascotaHTML.innerHTML= 'Nombre: ' + nombreM.value;


//     var plantillaMascota = document.createElement("div");
//     plantillaMascota.innerHTML = "";

//     document.getElementById('S2-Grid').appendChild(plantillaMascota);

// }
// do {

//     var mascotaSeleccionada = MascotaSeleccionada();

//     do {

//         var salir = false;
//         var atras = false;

//         var i = parseInt(prompt("Muy bien!, ahora, Que desea saber sobre " + mascotas[mascotaSeleccionada].nombre + "?\n\n1 - ¿El peso de " + mascotas[mascotaSeleccionada].nombre + " esta bien?\n2 - ¿Qué edad humana tiene " + mascotas[mascotaSeleccionada].nombre + "?\n\n3 - Cambiar Tamaño\n4 - cambiar Peso\n5 - Cambiar Edad\n\n6 - Ordenar por Edad\n7 - Ordenar por Peso\n\n8 - Cambiar Mascota \n\n9 - Salir."));

//         if (i <= 0 || i > 9 || isNaN(i)) {

//             alert("Ingrese un valor indicado, vuelva a intentarlo");

//         }



//         switch (i) {
//             case 1:

//                 mascotas[mascotaSeleccionada].calcularPeso();

//                 break;
//             case 2:

//                 mascotas[mascotaSeleccionada].calcularEdad();

//                 break;

//             case 3:

//                 mascotas[mascotaSeleccionada].cambiarTamaño(Tamaño());

//                 break;

//             case 4:

//                 mascotas[mascotaSeleccionada].cambiarPeso(Peso());

//                 break;

//             case 5:

//                 mascotas[mascotaSeleccionada].cambiarEdad(Edad());

//                 break;

//             case 6:

//                 mascotas.sort(OrdenarEdad);

//                 var texto = "El orden por edad de sus mascotas es este:\n";

//                 for (let i = 1; i <= mascotas.length; i++) {

//                     texto = texto.concat("\n" + i + ") " + mascotas[i - 1].nombre + " (" + mascotas[i - 1].edad + " año/s)");

//                 }

//                 alert(texto);

//                 break;

//             case 7:

//                 mascotas.sort(OrdenarPeso);

//                 var texto = "El orden por peso de sus mascotas es este:\n";

//                 for (let i = 1; i <= mascotas.length; i++) {

//                     texto = texto.concat("\n" + i + ") " + mascotas[i - 1].nombre + " (" + mascotas[i - 1].peso + " Kg)");

//                 }

//                 alert(texto);

//                 break;

//             case 8:

//                 atras = true;

//                 break;

//             case 9:

//                 salir = true;

//                 break;

//         }

//     } while (atras === false && salir === false);

// } while (salir === false);


// function Tamaño() {

//     do {

//         var opcionTamaño = parseInt(prompt("Tamaño: \n\n1 - Pequeño\n2 - mediano \n3 - Grande"));

//         if (opcionTamaño <= 0 || opcionTamaño > 3 || isNaN(opcionTamaño)) {

//             alert("Ingrese un valor indicado, vuelva a intentarlo");

//         }

//         switch (opcionTamaño) {
//             case 1:

//                 var tamaño = "pequeño";

//                 break;
//             case 2:

//                 var tamaño = "mediano";

//                 break;
//             case 3:

//                 var tamaño = "grande";

//                 break;

//         }


//     } while (opcionTamaño <= 0 || opcionTamaño > 3 || isNaN(opcionTamaño));

//     return tamaño;

// }

// function Peso() {

//     do {

//         var peso = prompt("Peso: ");

//         if (peso <= 0 || isNaN(peso)) {

//             alert("Ingrese un valor real, vuelva a intentarlo");

//         }

//     } while (peso <= 0 || isNaN(peso));

//     return peso;

// }

// function Edad() {

//     do {

//         var edad = prompt("Edad: ");

//         if (edad <= 0 || isNaN(edad)) {

//             alert("Ingrese un valor real, vuelva a intentarlo");

//         }

//     } while (edad <= 0 || isNaN(edad));

//     return edad;

// }

// function MascotaSeleccionada() {

//     var texto = "Muy bien!, ahora, sobre cual de tus mascotas quieres saber información?\n";

//     for (let i = 1; i <= mascotas.length; i++) {

//         texto = texto.concat("\n" + i + " - " + mascotas[i - 1].nombre);

//     }

//     do {

//         var seleccion = parseInt(prompt(texto));

//         if (seleccion <= 0 || seleccion > mascotas.length || isNaN(seleccion)) {
//             alert("Ingrese un valor real, vuelva a intentarlo");
//         }

//     } while (seleccion <= 0 || seleccion > mascotas.length || isNaN(seleccion));

//     return seleccion - 1;

// }

// function OrdenarEdad(a, b) {

//     if (a.edad > b.edad) {
//         return 1;
//     }
//     if (a.edad < b.edad) {
//         return -1;
//     }
//     return 0;
// }

// function OrdenarPeso(a, b) {

//     if (a.peso > b.peso) {
//         return 1;
//     }
//     if (a.peso < b.peso) {
//         return -1;
//     }
//     return 0;
// }