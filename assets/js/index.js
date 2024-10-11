document.getElementById("Formulario").addEventListener("submit", function(event){
    event.preventDefault();

    let reserva = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: document.getElementById("correo").value,
        edad: parseInt(document.getElementById("edad").value),
        fecha: document.getElementById("fecha").value,
    };


    const proxyreserva = new Proxy(reserva, {
        set: (obj, prop, value) => {
            if (prop === 'edad' && value < 18) {
                alert("Debes ser mayor de edad para hacer una reserva");
                return false;
            }
            obj[prop] = value;
            return true;
        }
    });

    proxyreserva.edad = reserva.edad;

    if (proxyreserva.edad >= 18) {
        console.log("Reserva guardada:", proxyreserva);
    }
})