const formulario = document.getElementById('formContacto');

if (formulario) {
    formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const campos = [
        { id: 'nombre', validar: v => v.trim().length >= 3, texto: 'Escribe tu nombre (mínimo 3 letras).' },
        { id: 'correo', validar: v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v), texto: 'Escribe un correo válido.' },
        { id: 'mensaje', validar: v => v.trim().length >= 10, texto: 'Cuéntame un poco más (mínimo 10 caracteres).' }
    ];

    let todoValido = true;

    campos.forEach(function (campo) {
        const input = document.getElementById(campo.id);
        const contenedor = input.parentElement;
        const error = document.getElementById('error-' + campo.id);

        if (campo.validar(input.value)) {
        contenedor.classList.remove('con-error');
        error.textContent = '';
        } else {
        contenedor.classList.add('con-error');
        error.textContent = campo.texto;
        todoValido = false;
        }
    });

    const exito = document.getElementById('exito');

    if (todoValido) {
        formulario.reset();
        exito.hidden = false;
    } else {
s    }
    });
}