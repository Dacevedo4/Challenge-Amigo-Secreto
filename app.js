let amigos = [];
let amigosDisponibles = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya fue agregado.");
    input.value = "";
    return;
  }

  amigos.push(nombre);
  amigosDisponibles.push(nombre);

  const lista = document.getElementById("listaAmigos");
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombre;
  lista.appendChild(nuevoItem);

  input.value = "";
  document.querySelector(".button-draw").disabled = false;
}

function sortearAmigo() {
  const botonSortear = document.querySelector(".button-draw");

  if (amigosDisponibles.length === 0) {
    alert("Ya no quedan amigos para sortear.");
    botonSortear.disabled = true;
    return;
  }

  const indice = Math.floor(Math.random() * amigosDisponibles.length);
  const amigoSorteado = amigosDisponibles[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;

  amigosDisponibles.splice(indice, 1);

  if (amigosDisponibles.length === 0) {
    botonSortear.disabled = true;
    alert("Se han sorteado todos los amigos.");
  }
}

function reiniciarApp() {
  amigos = [];
  amigosDisponibles = [];

  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";

  document.querySelector(".button-draw").disabled = false;
  document.getElementById("amigo").value = "";

  alert("El juego se reinicio,puedes agregar nuevos amigos.");
}
