function toggleTexto() {
  const texto = document.getElementById("texto");
  const botao = event.target;

  if (texto.classList.contains("hidden")) {
    texto.classList.remove("hidden");
    botao.innerText = "Ver menos";
  } else {
    texto.classList.add("hidden");
    botao.innerText = "Ver mais";
  }
}