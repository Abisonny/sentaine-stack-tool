import { renderFromConfig } from "./renderer.js";
import { calculate } from "./engine.js";
import { appConfig } from "./config.js";
import { subscribe } from "./state.js";

export function renderApp() {
  const root = document.getElementById("app");

  root.innerHTML = `
    <div class="engine-container">
      <h1>Sentaine Engine</h1>

      <div id="ui"></div>
      <div id="results"></div>
    </div>
  `;

  loadUI();
  setupReactivity();
}

function loadUI() {
  const ui = document.getElementById("ui");
  renderFromConfig(appConfig, ui);
}

function setupReactivity() {
  subscribe(() => {
    calculate();

    const ui = document.getElementById("ui");
    const results = document.getElementById("results");

    renderFromConfig(appConfig, ui);

    // only render results if your renderer supports it
    if (results) {
      results.innerHTML = ""; // or renderResults()
    }
  });
}