let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#recuadro");
  x.dblclick(dobleClic);
}

let estado = "mayor";
function dobleClic() {
  let x = $(this);
  if (estado == "mayor") {
    $(this).css("width", "300px");
    $(this).css("height", "300px");
    estado = "menor";
  }
  else {
    $(this).css("width", "600px");
    $(this).css("height", "50px");
    estado = "mayor";
  }
}