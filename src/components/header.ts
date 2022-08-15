export function header(el: HTMLElement) {
  const headerEl: HTMLElement = document.createElement("header");
  headerEl.className = "header";

  headerEl.innerHTML = `
    <div class="header__logo"></div>
    <input class="header__input"type="text">
    <button class="header__btn">Buscar</button>`;

  el.appendChild(headerEl);
}
