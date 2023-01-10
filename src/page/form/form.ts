import { state } from "../../state";

export function initFormPage() {
  const div = document.createElement("div");
  const style = document.createElement("style");
  const name = state.subscribe((state) => {
    const localState = state.getState();
    console.log(" el state", localState);
  });

  div.innerHTML = `
  <div class="body">
  <header-element></header-element>
  
  
  <h1 class="section-welcome__title">Te damos la bienvenida a esta página ${name}</h1>


  <footer-element></footer-element>
</div>
`;
  div.append(style);
  // console.log(div, "este es el div");

  return div;
}
