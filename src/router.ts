import { initPageWelcome } from "./page/welcome/welcome";
import { initFormPage } from "./page/form/form";

const routes = [
  {
    path: /\/welcome/,
    component: initPageWelcome,
  },
  {
    path: /\/form/,
    component: initFormPage,
  },
];

// aqui se inicializa el router

export function initRouter(rootEl: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handelRoute(path);
  }
  function handelRoute(route) {
    //console.log("en el HandelRoute" + route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el: any = r.component({ goTo });
        if (rootEl.firstChild) {
          rootEl.firstChild.remove();
        }
        rootEl.appendChild(el);
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
