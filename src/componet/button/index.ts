import { state } from "../../state";

export function initButon() {
  class Button extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    connetCallback() {
      const form: any = this.shadow.querySelector(".form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const f = e.target as any;

        state.addItem(f.text.value);
        // console.log(f.text.value, "form");
      });
    }

    render() {
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
      .form {
        display: flex;
        flex-direction: column;
    }
    .label{
        font-size:18px
    }
  
      .button {
        font-size:18px;
          padding: 17px 13px;
          margin: 18px;
          border-radius: 4px;
          background-color : #9CBBE9;
      }
        `;

      this.shadow.appendChild(style);

      this.shadow.appendChild(div);
      console.log("este es el buton", div);
    }
  }

  customElements.define("custon-button", Button);
}
