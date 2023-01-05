export function initTitle() {
  class Title extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");

      const div = document.createElement("div");
      const style = document.createElement("style");

      div.classList.add("root");

      div.innerHTML = `
       
          <h1 class = "h1">
          ${label}
         </h1>
       
        `;
      style.innerHTML = `
    .h1{
      font-size: 52px;
      font-weight: 700;
      color:  #000000;
      text-align: center;
    }
        `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("title-field", Title);
}
