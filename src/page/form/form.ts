export function initFormPage(params: any) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.innerHTML = `
  <div class="body">
  <header-element></header-element>
  <section class="section">
  
  <custon-title></custon-title>
  
  <custon-subtitle ></custon-subtitle>
  <input-field id="email" label="Email"></input-field>
  <input-field id="text" label="Comida Favorita"></input-field>
  <custon-select label="Selecciona una opción"></custon-select>

  <custon-button  class = "section_Button" label="Enviar"></custon-button>
  </section>
  
  <footer-element></footer-element>
  </div>
  `;
  const buttonEl = div.querySelector(".section_Button") as HTMLElement;
  buttonEl.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  div.append(style);
  // console.log(div, "este es el div");

  return div;
}
