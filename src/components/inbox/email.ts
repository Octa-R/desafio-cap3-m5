export function email(id) {
  const emailEl = document.createElement("div");
  emailEl.innerHTML = `
    <p>email con id: ${id}</p>
  `;
  return emailEl;
}
