import { state } from "./../../state";

export function initPageWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.innerHTML = `
    <div class="body">
  
      <header-element></header-element> 


      <section class="welcome">
      <h1 class="welcome__title">Te damos la bienvenida a esta página</h1>
      <h3 class="welcome__subtitle">Para continuar ingresá tu nombre</h3>
      <form class="welcome__form">
        <label class="form__label">
          Nombre
          <input class="form__input" name="name" type="text" placeholder="ingresá tu nombre" /input>
        </label>
        <button class="form__button">Comenzar</button>
      </form>
    </section>


   <footer-element></footer-element>
   </div>
  
   `;

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

  const formEl: any = div.querySelector(".welcome__form") as HTMLElement;

  //console.log(formEl, "este es el form");

  formEl.addEventListener("submit", (e: any) => {
    e.preventDefault();
    params.goTo("/form");

    // console.log(e.target.name.value, "form");

    state.setState({
      ...state.getState(),

      name: e.target.name.value,
    });
    console.log(state.getState(), "state");
  });

  div.append(style);
  return div;
}
