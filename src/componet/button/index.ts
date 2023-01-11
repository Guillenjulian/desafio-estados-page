import { state } from "./../../state";

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
<form class="form">

<button class=" button">${label}</button> 
</form>
        `;
      style.innerHTML = `
        .root{
            display: flex;
            flex-direction: column;
            margin: 18px;

        }
       
        .button{
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #000;
          border-radius: 5px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
          background-color: #9cbbe9;
          color: #000;
          font-size: 1.5rem;
          font-weight: 400;
          cursor: pointer;
         
        }
            
       
        `;

      shadow.appendChild(style);

      shadow.appendChild(div);
    }
  }
  customElements.define("custon-button", Button);
}
