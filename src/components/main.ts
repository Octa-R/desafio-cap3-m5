import { goTo } from "../go-to";

export function main(el: HTMLElement) {
  const mainEl = <HTMLElement>document.createElement("main");
  mainEl.className = "main";

  const emailsList = [
    { id: 1, title: "un email" },
    { id: 2, title: "otro email" },
  ];

  mainEl.innerHTML = `
  <h2 class="main__container__pathname">Inbox</h2>
  <div class="main__container">
  </div>
  `;

  const mainContainer = <HTMLElement>mainEl.querySelector(".main__container");

  for (const email of emailsList) {
    const emailEl = <HTMLElement>document.createElement("div");

    emailEl.className = "main__container__email";
    emailEl.id = email.id.toString();

    emailEl.innerHTML = `
      <div class="main__conteiner__email-title">${email.title}</div>
      <div id="triangle-right"></div>
    `;

    emailEl.addEventListener("click", () =>
      goTo(location.pathname + "/" + email.id)
    );

    mainContainer.appendChild(emailEl);
  }

  el.appendChild(mainEl);
}
