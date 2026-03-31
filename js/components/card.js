import { createButton } from "./button.js";

export function createCard({ title, text, buttonText, onClick }) {
  const container = document.createElement("div");
  container.className = "card";

  const button = createButton({
    text: buttonText,
    onClick
  });

  container.innerHTML = `
    <h2>${title}</h2>
    <p>${text}</p>
  `;

  container.appendChild(button);

  return container;
}