export const state = {};

export function setState(key, value) {
  state[key] = value;
  console.log("STATE UPDATE:", state);
}

export function getState(key) {
  return state[key];
}

