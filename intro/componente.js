const messageElement = document.createElement("h1");
messageElement.textContent="Hola Bienvenidos";

const button = document.createElement("button");
button.textContent="Cambiar Mensaje";

button.addEventListener("click",() => {
  messageElement.textContent="Hiciste click!"
});

document.body.appendChild(messageElement);
document.body.appendChild(button);