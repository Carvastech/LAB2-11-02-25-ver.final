let boton = document.getElementById("boton1");


boton.addEventListener("click", function() {
  alert("ADMIRO A UNAS CUATAS PERSONAS, CANTANTES COMO LOS INTEGRANTES DE IMAGINE DRAGONS, Y JUGADORES DE FUTBOL COMO MESSI");
});


function alPresionarTecla(event) {
    
    if (event.key === "M") {
        alert("COMPLETAR MI CARRERA Y SER UN PROFESIONAL");
    }
}


window.addEventListener('keydown', alPresionarTecla);

//esto es para que el texto salga abajo de la imagen
document.addEventListener('DOMContentLoaded', function() {
    let imagen = document.querySelector('.imagen1');
    let mensaje = document.getElementById('mensaje');

    // esto otro para agregar el evento de clic a la imagen
    imagen.addEventListener('click', function() {
        // y esto para cambiar el contenido del div y hacerlo visible
        mensaje.style.display = 'block';  // muestra el mensaje
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let algoImportante = document.getElementById('algo-importante');
    
    // Verifica si el elemento fue encontrado correctamente
    if (algoImportante) {
        algoImportante.addEventListener('mouseover', function() {
            alert("¡No podría vivir sin música!");
        });
    } else {
        console.log("El elemento no se encuentra.");
    }


    let boton = document.getElementById('miBoton');

    
    boton.addEventListener('click', function() {
        // Cambiamos el color de fondo del botón cuando se hace clic
        boton.style.backgroundColor = 'blue';
        boton.style.color = 'white'; // Cambiar el color del texto también
    });

    document.getElementById('boton5').ondblclick = function() {
        // Cambiar el color de fondo del botón cuando se hace doble clic
        this.style.backgroundColor = 'purple';  // Cambiar el color de fondo
        this.style.color = 'white';             // Cambiar el color del texto
    };

    


    
});
