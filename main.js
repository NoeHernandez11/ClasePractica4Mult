let temporal = 0;
let operacion = '';
var input = document.getElementById('input');

function add(num) {
  if (num == 0) {
    if (input.value[input.value.length - 1] != '0' || input.value.length > 1) {
      input.value = input.value + num;
    }
  } else if (num == '.') {
    if (input.value[input.value.length - 1] != '.' && input.value != '') {
      input.value = input.value + num;
    }
  } else {
    input.value = input.value + num;
  }
}

function operacionFunction(operador) {
  operacion = operador;
  temporal = input.value;
  input.value = '';
}

function igual() {
  if (operacion != '') {
    input.value = eval(temporal + operacion + input.value);
  }
}

function borrar() {
  input.value = input.value.toString().slice(0,-1);
}


function cleanInput() {
  if (input.value != '') {
    input.value = '';
  } else {
    temporal = 0;
    operacion = '';
  }
}

function borrar() {
  input.value = input.value.toString().slice(0,-1);
}
