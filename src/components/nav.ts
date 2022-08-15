export function nav(el: HTMLElement) {
  const navEl = document.createElement("nav");
  navEl.className = "nav";
  navEl.innerHTML = `
    <button class="nav__inbox-btn">Inbox</button>
    <button class="nav__sent-btn">Sent</button>
  `;

  el.appendChild(navEl);
}
