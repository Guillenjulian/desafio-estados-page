export function initButon() {
  class Button extends HTMLElement {
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
    <button class=" button">${label}</button> 
        `;
      style.innerHTML = `
        .root{
            display: flex;
            flex-direction: column;
        }
        .label{
            font-size:18px
        }
        .button{
            font-size:18px;
            padding: 17px 13px;
            margin: 18px;
            border-radius: 4px;
            background-color : #9CBBE9;
            
        }
        `;

      shadow.appendChild(style);

      shadow.appendChild(div);
      // console.log("este es el buton", div);
    }
  }

  customElements.define("custon-button", Button);
}
