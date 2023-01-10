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
<input-field name="${label}" label="Nombre" id="text"></input-field>
<button class=" button">${label}</button> 
</form>
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
      console.log("este es el buton", div);
      //   const formEL: any = div.querySelector(".form") as any;
      // console.log(state.getState(), "este es el state");

      //console.log("este es el form", formEL);

      // formEL.addEventListener("submit", (e: any) => {
      //   e.preventDefault();

      //   state.setState({
      //     ...state.getState(),
      //     nombre: e.target.name.value,
      //   });
      //   console.log(e.target.name.value, "form");
      // });
    }
  }
  customElements.define("custon-button", Button);
}
