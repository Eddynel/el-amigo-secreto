// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // ← corregido trim para eliminar espacios en blanco

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  listaDeAmigos.push(nombre);
  input.value = "";

  mostrarLista(); // ← esta llamada es para que se actualice la lista visual
}

function mostrarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = ""; // ← limpia la lista antes de actualizar

  listaDeAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 

  if (listaDeAmigos.length < 2) {
    alert("Debe haber al menos dos amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const nombreSorteado = listaDeAmigos[indiceAleatorio];

  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${nombreSorteado}`;
  resultado.appendChild(li);
}

// Detectar la tecla Enter en el campo de texto
document.getElementById("amigo").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que el formulario se envíe si lo hay
    agregarAmigo(); // Llama a la misma función que el botón
  }
});

