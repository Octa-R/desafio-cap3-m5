import { header } from "./components/header";
import { main } from "./components/main";
import { nav } from "./components/nav";
import { handleRoute } from "./handle-route";
import { goTo } from "./go-to";

(() => {
  const mainContainer = <HTMLElement>document.querySelector(".container");
  header(mainContainer);
  nav(mainContainer);
  main(mainContainer);

  const inboxBtn = <HTMLElement>document.querySelector(".nav__inbox-btn");
  const sentBtn = <HTMLElement>document.querySelector(".nav__sent-btn");

  inboxBtn.addEventListener("click", () => goTo("/inbox"));
  sentBtn.addEventListener("click", () => goTo("/sent"));

  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });
})();
