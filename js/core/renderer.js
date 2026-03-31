import { createInput } from "../components/input.js";
import { createCard } from "../components/card.js";
import { state } from "./state.js";

export function renderFromConfig(config, container) {
  config.forEach(item => {
    let element;

    switch (item.type) {
      case "input":
        element = createInput(item);
        break;

      case "card":
        element = createCard({
          title: item.title,
          text: item.text,
          buttonText: item.buttonText,
          onClick: () => handleAction(item.action)
        });
        break;
    }

    if (element) container.appendChild(element);
  });
}

function handleAction(action) {
  if (action === "calculate") {
    calculate();
  }
}

// bring your logic here
function calculate() {
  let s = state.speed || 0;
  let d = state.data || 0;
  let r = state.realtime || 0;
  let sc = state.scale || 0;
  let c = state.compliance || 0;
  let l = state.logic || 0;

  let supabase =
    s*0.25 + d*0.20 + r*0.15 + sc*0.15 + c*0.15 + l*0.10;

  let firebase =
    s*0.25 + d*0.08 + r*0.20 + sc*0.15 + c*0.07 + l*0.10;

  let node =
    s*0.05 + d*0.25 + r*0.15 + sc*0.20 + c*0.20 + l*0.15;

  let recommendation = "";

  if (supabase > firebase && supabase > node) {
    recommendation = "Use Supabase";
  } else if (firebase > node) {
    recommendation = "Use Firebase";
  } else {
    recommendation = "Use Node Backend";
  }

  alert(
    `Supabase: ${supabase.toFixed(2)}\n` +
    `Firebase: ${firebase.toFixed(2)}\n` +
    `Node: ${node.toFixed(2)}\n\n` +
    `Recommendation: ${recommendation}`
  );
}