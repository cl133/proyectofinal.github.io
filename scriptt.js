const BOTON = document.getElementById('boton');
const MOSTRAR = document.getElementById("mostrar");
const FECHA = document.getElementById('fecha');
const NOTA = document.getElementById('nota');
const LISTA = document.getElementById('lista');
const LIMPIAR = document.getElementById('limpiar');



const lista = JSON.parse(localStorage.getItem('notas')) || [];


BOTON.addEventListener('click', () => {
  if (FECHA.value === '' || NOTA.value === '') {
    swal("Atención", "Los datos deben estar completos", "warning");
  } else {
    swal("Muy bien!", "Los datos han sido guardados", "success");
    agregar();


    localStorage.setItem('notas', JSON.stringify(lista));
  }
});

MOSTRAR.addEventListener('click', () => {
  insertarTabla();
});

LIMPIAR.addEventListener('click', () => {
  limpiar();
});

function agregar() {
  let fecha = document.getElementById("fecha").value;
  let nota = document.getElementById("nota").value;
  const datos = {
    fecha: fecha,
    nota: nota
  };
  lista.push(datos);
  console.log(lista);
}

function insertarTabla() {
  let tabla = "<table>";
  tabla = tabla + "<tr> <th> Fecha </th> <th>Nota </th> </tr>";
  lista.forEach(p => {
    tabla = tabla + "<tr>";
    tabla = tabla + "<td>" + p.fecha + "</td>";
    tabla = tabla + "<td>" + p.nota + "</td>";
    tabla = tabla + "</tr>";
  });
  tabla = tabla + "</table>";
  document.getElementById("listado").innerHTML = tabla;
}

function limpiar() {
  let elementos = document.getElementsByTagName('input');
  let elementos2 = document.getElementsByTagName('textarea');

  for (let i = 0; i < elementos.length; i++) {
    elementos[i].value = '';
  }
  for (let i = 0; i < elementos2.length; i++) {
    elementos2[i].value = '';
  }


  lista.length = 0;
  localStorage.setItem('notas', JSON.stringify(lista));
}



