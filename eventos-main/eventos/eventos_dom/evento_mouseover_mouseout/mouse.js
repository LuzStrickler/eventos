let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("td");
  x.mouseover(entraMouse);
  x.mouseout(salirMouse);
}

function entraMouse() {
  $(this).css("background-color", "#bdecb6");
}

function salirMouse() {
  $(this).css("background-color", "#fff");
}