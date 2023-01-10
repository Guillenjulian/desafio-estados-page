// import { state } from "../../state";

// export function initForm() {
//   class Form extends HTMLElement {
//     shadow = this.attachShadow({ mode: "open" });
//     shadowRoot: ShadowRoot | null;
//     name: string;

//     constructor() {
//       super();
//       this.render();
//       state.subscribe(() => {});
//       this.syncWhichState();
//     }
//     syncWhichState() {
//       const lastState = state.getState();
//       this.name = lastState.name || "";
//       this.render();
//     }
//     render() {
//       this.shadow.innerHTML = `

//         <form class="form">
//         <h3>Formulario</h3>
//         <lebel for="name">Nombre
//         <input-field id="text" name="name" label="Nombre"></input-field>
//         </lebel>
//         <button class="button">Enviar</button>
//     </form>

//     `;

//       const formEL: any = this.shadow.querySelector(".form");

//       formEL.addEventListener("submit", (e: any) => {
//         formEL.preventDefault();
//         state.setState({
//           ...state.getState(),
//           name: e.target.name.value,
//         });
//       });
//       // console.log("soy el state12", state.getState());
//       // console.log("soy el state12", state.getState().name);
//     }
//   }
//   customElements.define("form-element", Form);
// }
