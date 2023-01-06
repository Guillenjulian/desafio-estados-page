import { initPageWelcome } from "./page/welcome/welcome";
import { initstep1 } from "./page/form/form";

const routes = [
  {
    path: /\/form/,
    component: initstep1,
  },
  {
    path: /\/welcome/,
    component: initPageWelcome,
  },
];

export function initRouter(conteiner: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handelRoute(path);
  }
  function handelRoute(route) {
    //  console.log("en el HandelRoute" + route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el: any = r.component({ goTo });
        if (conteiner.firstChild) {
          conteiner.firstChild.remove();
        }
        conteiner.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else handelRoute(location.pathname);

  window.onpopstate = () => {
    handelRoute(location.pathname);
  };
}
