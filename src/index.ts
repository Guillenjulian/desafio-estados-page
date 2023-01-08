//estas funciones se encarga de renderizar los componente

import { initHeader } from "./componet/header";
import { initButon } from "./componet/button";
import { initFooter } from "./componet/footer";
import { initinput } from "./componet/input";
import { initSubtitel } from "./componet/subtitle";
import { initTitle } from "./componet/title";
import { initForm } from "./componet/form";

import { initSelector } from "./componet/selector";

//esta funcion  se encarda el rooteo de la pagina
import { initRouter } from "./router";

(function main() {
  const rootEl: any = document.querySelector(".root");
  // traigo componentes y los renderizo
  initForm();
  initSelector();
  initinput();
  initSubtitel();
  initTitle();
  initHeader();
  initButon();
  initFooter();

  //rooteo todos los elementos

  initRouter(rootEl);
})();
