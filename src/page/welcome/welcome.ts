import { state } from "./../../state";

export function initPageWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.innerHTML = `
    <div class="body">
  
      <header-element></header-element> 
      <div class="container">
  
  <title-field label="Te damos la bienvenida a esta página"></title-field>
  <div>
  <subtitle-field label ="Para continuar ingresá tu nombre"></subtitle>
  </div>
  <form class="form">
<div>
<input-field   label="Nombre" id="text"></input>
</div>



  <custon-button  class= "custon-button " label="Comenzar"></custon-button>




  </form>
  


  </div>
  
   <footer-element></footer-element>
   </div>
  
   `;

  const formEL: any = div.querySelector(".form") as any;
  console.log(state.getState(), "este es el state");

  console.log("este es el form", formEL);

  formEL.addEventListener("submit", (e: any) => {
    e.preventDefault();

    state.setState({
      ...state.getState(),
      name: e.target.value,
    });
    console.log(e.target.value, "form");
  });
  const buttonEL: any = div.querySelector(".custon-button ") as any;
  console.log(" este es el boton  del welcome", buttonEL);
  //buttonEL.addEventListener("click", () => params.goTo("./form"));

  style.innerHTML = `
  .body {  display: flex;
      flex-direction: column;
    
    }
      .container{
        display: flex;
        flex-direction: column;  
        gap:25px;
        margin-bottom:1px; 
    }
    
    `;
  div.append(style);
  return div;
}
