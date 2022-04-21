let pantalla = document.getElementById('pantalla');

function display(num) {
    pantalla.value += num;
}

function calcular() {
    try {
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        alert('Inválido');
    }
}

function Clear() {
    pantalla.value = "";
}

function Del() {
    pantalla.value = pantalla.value.slice(0, -1);
}