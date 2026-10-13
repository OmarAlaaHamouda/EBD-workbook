import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.textContent = "";

  for (const item of list) {
    const listItem = document.createElement("li");

    listItem.classList.add("goods-item");
    listItem.textContent = `${item.name} - ${item.price} EGP`;

    listElement.append(listItem);
  }
}

export function matching() {
  return items.filter((item) => item.price < 100);
}

export function start() {
  renderItems(items);

  document.querySelector("#show-some").addEventListener("click", () => {
    renderItems(matching());
  });
}

