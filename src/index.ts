//estas funciones se encarga de renderizar los componente

import { initHeader } from "./componet/header";
import { initFooter } from "./componet/footer";
import { initTitle } from "./componet/title";
//import {} from "./componet/button";
//import {} from "./componet/input";
//import {} from "./componet/subtitle";
//import {  } from "./componet/form";

//import { initSelector } from "./componet/selector";

//esta funcion  se encarda el rooteo de la pagina
import { initRouter } from "./router";

(function main() {
  const rootEl = document.querySelector(".root") as HTMLElement;
  //console.log(rootEl);

  // traigo componentes y los renderizo
  initHeader();
  //initTitle();
  initFooter();
  //rooteo todos los elementos

  initRouter(rootEl);
})();
