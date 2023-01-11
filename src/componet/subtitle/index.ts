export function initSubtitle() {
  class Subtitle extends HTMLElement {
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
       <h2 class="label">Necesitamos algunos datos más</h2>
       `;
      style.innerHTML = `
       .root{
         display: flex;
         flex-direction: column;
         justify-content: center;
            align-items: right;
       }
       .label{
       
        margin: 18px;
         font-size:18px
         font-weight: 400;
         font-family: 'Roboto', sans-serif;
        align-text: center;
       }
       `;

      shadow.appendChild(style);

      shadow.appendChild(div);
    }
  }
  customElements.define("custon-subtitle", Subtitle);
}
