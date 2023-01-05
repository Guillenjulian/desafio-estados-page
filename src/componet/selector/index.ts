export function initSelector() {
  class Selector extends HTMLElement {
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
        <label class=" label">${label}</label>
  
          <select class=" select" name="option" >
          <option value="piedra">Piedra</option>
          <option value="papel">Papel</option>
          <option value="tijera">Tijera</option>
        </select>
          `;
      style.innerHTML = `
          .root{
              display: flex;
              flex-direction: column;
              
          }
          .label{
              font-size:18px
          }
  
          .select{
              font-size:18px;
              padding: 17px 13px;
              margin: 18px;
              border-radius: 4px;
              background-color: #fff;
              border: 2px solid 
            }
          `;

      shadow.appendChild(style);

      shadow.appendChild(div);
      // console.log("este es el buton", div);
    }
  }

  customElements.define("custon-select", Selector);
}
