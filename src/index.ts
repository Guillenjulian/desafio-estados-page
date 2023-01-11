//esta funcion  se encarda el rooteo de la pagina
import { initRouter } from "./router";

//estas funciones se encarga de renderizar los componente

import { initHeader } from "./componet/header";
import { initFooter } from "./componet/footer";
import { init as initTitle } from "./componet/title";
import { initButon } from "./componet/button";
import { initSubtitle } from "./componet/subtitle";
import { initinput } from "./componet/input";
import { initSelector } from "./componet/selector";

(function () {
  //console.log(rootEl);

  // traigo componentes y los renderizo
  initHeader();
  initFooter();
  initTitle();
  initButon();
  initSubtitle();
  initinput();
  initSelector();

  //rooteo todos los elementos
  const rootEl = document.querySelector(".root") as HTMLElement;
  initRouter(rootEl);
})();
