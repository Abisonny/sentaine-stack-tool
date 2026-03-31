export function createButton({ text, onClick }) {
  const btn = document.createElement("button");

  btn.textContent = text;
  btn.className = "btn";

  btn.onclick = onClick;

  return btn;
}