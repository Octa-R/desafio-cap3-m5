export function main(el: HTMLElement) {
  const mainEl = <HTMLElement>document.createElement("main");
  mainEl.className = "main";

  mainEl.innerHTML = `
    <h2 class="main__container__pathname">Inbox</h2>
    <div class="main__container"></div>
  `;

  el.appendChild(mainEl);
}
