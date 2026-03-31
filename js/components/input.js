import { setState } from "../core/state.js";

export function createInput({ label, id, min = 1, max = 5 }) {
  const wrapper = document.createElement("div");
  wrapper.className = "input-group";

  const inputId = id;

  wrapper.innerHTML = `
    <label>${label}</label>
    <input id="${inputId}" type="number" min="${min}" max="${max}">
  `;

  const input = wrapper.querySelector("input");

  input.addEventListener("input", (e) => {
    setState(inputId, +e.target.value);
  });

  return wrapper;
}