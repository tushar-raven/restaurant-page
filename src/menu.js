import pizzaImage from "./images/pizza.jpg";
import noodlesImage from "./images/noodles.jpg";
import burgerImage from "./images/burger.jpg";
import breadImage from "./images/bread.jpg";
import mojitoImage from "./images/mojito.jpg";
import pastaImage from "./images/pasta.jpg";

function createMenu() {
  const menuBox = document.createElement("div");
  menuBox.className = "menu-box";

  menuBox.appendChild(createItem("Pizza", "300", pizzaImage));
  menuBox.appendChild(createItem("Noodles", "200", noodlesImage));
  menuBox.appendChild(createItem("Burger", "150", burgerImage));
  menuBox.appendChild(createItem("pasta", "250", pastaImage));
  menuBox.appendChild(createItem("Garlic Bread", "200", breadImage));
  menuBox.appendChild(createItem("Mojito", "150", mojitoImage));

  return menuBox;
}

function createItem(name, price, image) {
  const itemBox = document.createElement("div");
  itemBox.className = "item-box";

  const itemName = document.createElement("div");
  itemName.textContent = name;
  itemName.className = "item-name";

  const itemPrice = document.createElement("div");
  itemPrice.textContent = `Rs. ${price}`;
  itemPrice.className = "item-price";

  const itemImage = document.createElement("img");
  itemImage.src = image;
  itemImage.className = "item-image";

  itemBox.appendChild(itemName);
  itemBox.appendChild(itemImage);
  itemBox.appendChild(itemPrice);

  return itemBox;
}

function loadMenu() {
  const mainBox = document.querySelector(".main-box");
  mainBox.textContent = "";
  mainBox.appendChild(createMenu());
}

export default loadMenu;
