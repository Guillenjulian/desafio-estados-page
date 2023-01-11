import { state } from "../../state";

export function init() {
  class Title extends HTMLElement {
    name: string;
    constructor() {
      super();
      state.subscribe(() => {
        this.syncWithState();
      });
      this.syncWithState();
    }
    syncWithState() {
      const localsState = state.getState();
      this.name = localsState.name || "";
      this.render();
    }
    render() {
      this.textContent = ` Hola  ` + this.name;
      this.style.height = "60px";
      this.style.width = "100%";
      this.style.textAlign = "right";
      this.style.margin = "18px";
      this.style.display = "flex";
      this.style.alignItems = "right";
      this.style.fontSize = "35px";
      this.style.color = "black";
      this.style.fontWeight = "600";
      (this.style.fontFamily = "Roboto"), "sans-serif";
    }
  }
  customElements.define("custon-title", Title);
}
