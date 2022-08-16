import { emailList } from "./components/inbox/email-list";

export function handleRoute(route: string) {
  // console.log(route);
  const titleEl = <HTMLElement>(
    document.querySelector(".main__container__pathname")
  );
  const mainEl = <HTMLElement>document.querySelector(".main");
  const inboxBtn = <HTMLElement>document.querySelector(".nav__inbox-btn");
  const sentBtn = <HTMLElement>document.querySelector(".nav__sent-btn");
  const mainContainer = <HTMLElement>document.querySelector(".main__container");

  const handleSentRoute = () => {
    titleEl.textContent = "sent";
    mainEl.style.backgroundColor = "#FF9BB3";
    inboxBtn.style.backgroundColor = "#888888";
    sentBtn.style.backgroundColor = "#393939";
  };

  const handleInboxRoute = () => {
    titleEl.textContent = "inbox";
    mainEl.style.backgroundColor = "#fff59b";
    inboxBtn.style.backgroundColor = "#393939";
    sentBtn.style.backgroundColor = "#888888";
    emailList();
  };

  const showEmail = (id: string) => {
    titleEl.textContent = id;
    mainContainer.innerHTML = "";
  };

  const routes = [
    {
      path: /\//,
      handler: () => handleInboxRoute(),
    },
    {
      path: /\/inbox/,
      handler: () => handleInboxRoute(),
    },
    {
      path: /\/inbox\/./,
      handler: () => {
        const id = route.split("/")[2];
        showEmail(id);
      },
    },
    {
      path: /\/sent/,
      handler: () => handleSentRoute(),
    },
    {
      path: /\/sent\/./,
      handler: () => handleSentRoute(),
    },
  ];

  for (const r of routes) {
    if (r.path.test(route)) {
      r.handler();
    }
  }
}
