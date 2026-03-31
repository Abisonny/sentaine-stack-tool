import { renderApp } from "./core/render.js";

renderApp();function calculate() {
  let s = +document.getElementById("speed").value;
  let d = +document.getElementById("data").value;
  let r = +document.getElementById("realtime").value;
  let sc = +document.getElementById("scale").value;
  let c = +document.getElementById("compliance").value;
  let l = +document.getElementById("logic").value;

  let supabase =
    s*0.25 + d*0.20 + r*0.15 + sc*0.15 + c*0.15 + l*0.10;

  let firebase =
    s*0.25 + d*0.08 + r*0.20 + sc*0.15 + c*0.07 + l*0.10;

  let node =
    s*0.05 + d*0.25 + r*0.15 + sc*0.20 + c*0.20 + l*0.15;

  let recommendation = "";

  if (supabase > firebase && supabase > node) {
    recommendation = "Use Supabase (Recommended Default)";
  } else if (firebase > node) {
    recommendation = "Use Firebase (Mobile / Realtime Focus)";
  } else {
    recommendation = "Use Custom Node Backend (Advanced Use)";
  }

  document.getElementById("result").innerHTML =
    "Supabase: " + supabase.toFixed(2) + "<br>" +
    "Firebase: " + firebase.toFixed(2) + "<br>" +
    "Node: " + node.toFixed(2) + "<br><br>" +
    "👉 Recommendation: " + recommendation;
}
