export function initTitle() {
  class Title extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerText = "Hola ";
      this.style.display = "block";
      this.style.fontFamily = "Roboto";
      this.style.fontSize = "52px";
      this.style.fontWeight = "700";
      this.style.color = "black";
    }
  }
  customElements.define("title-Element", Title);
}
