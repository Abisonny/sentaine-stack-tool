export const appConfig = [
  { type: "input", label: "Speed", id: "speed" },
  { type: "input", label: "Data Complexity", id: "data" },
  { type: "input", label: "Real-time Needs", id: "realtime" },
  { type: "input", label: "Scalability", id: "scale" },
  { type: "input", label: "Compliance", id: "compliance" },
  { type: "input", label: "Backend Logic", id: "logic" },

  {
    type: "card",
    title: "Run Decision",
    text: "Click below to calculate your stack recommendation.",
    buttonText: "Calculate",
    action: "calculate"
  }
];