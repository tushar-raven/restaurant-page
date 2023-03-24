import "./style.css";
//home image
import chefImage from "./images/chef.jpg";

//menu images
import pizzaImage from "./images/pizza.jpg";
import noodlesImage from "./images/noodles.jpg";
import burgerImage from "./images/burger.jpg";
import breadImage from "./images/bread.jpg";
import mojitoImage from "./images/mojito.jpg";
import pastaImage from "./images/pasta.jpg";

//address image
import mapImage from "./images/map.jpg";

let mainBox;
let menuBox;

function createHeader() {
  const content = document.querySelector("#content");
  const headerBox = document.createElement("div");
  headerBox.className = "header-box";
  content.appendChild(headerBox);

  const nameBox = document.createElement("div");
  nameBox.className = "logo";
  nameBox.textContent = "Molten Cave";
  headerBox.appendChild(nameBox);

  const navBox = document.createElement("div");
  navBox.className = "nav-box";
  headerBox.appendChild(navBox);

  const homeBtn = document.createElement("button");
  homeBtn.className = "nav-button";
  homeBtn.textContent = "Home";
  navBox.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.className = "nav-button";
  menuBtn.textContent = "Menu";
  navBox.appendChild(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.className = "nav-button";
  contactBtn.textContent = "Contact";
  navBox.appendChild(contactBtn);
}

function createMain() {
  mainBox = document.createElement("div");
  mainBox.className = "main-box";
  content.appendChild(mainBox);
}

function createHome() {
  const homeBox = document.createElement("div");
  homeBox.className = "home-box";
  mainBox.appendChild(homeBox);

  const heroText = document.createElement("div");
  heroText.textContent = "The only cafe in Gharaunda";
  heroText.className = "hero-text";
  homeBox.appendChild(heroText);

  const heroSubtext = document.createElement("div");
  heroSubtext.textContent = "Birthday celebration spot since 2018";
  heroSubtext.className = "hero-subtext";
  homeBox.appendChild(heroSubtext);

  const chefImg = document.createElement("img");
  chefImg.src = chefImage;
  chefImg.className = "chef-img";
  homeBox.appendChild(chefImg);

  const ctaText = document.createElement("div");
  ctaText.textContent = "Come to store because we rarely do home delivery";
  ctaText.className = "cta-text";
  homeBox.appendChild(ctaText);
}

function createMenu() {
  menuBox = document.createElement("div");
  menuBox.className = "menu-box";
  mainBox.appendChild(menuBox);

  createItem("Pizza", "300", pizzaImage);
  createItem("Noodles", "200", noodlesImage);
  createItem("Burger", "150", burgerImage);
  createItem("pasta", "250", pastaImage);
  createItem("Garlic Bread", "200", breadImage);
  createItem("Mojito", "150", mojitoImage);
}

function createItem(name, price, image) {
  const itemBox = document.createElement("div");
  itemBox.className = "item-box";
  menuBox.appendChild(itemBox);

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
}

function createContact() {
  const contactBox = document.createElement("div");
  contactBox.className = "contact-box";
  mainBox.appendChild(contactBox);

  const contact = document.createElement("div");
  contact.textContent = "📞 123-456-789";
  contact.className = "contact";
  contactBox.appendChild(contact);

  const address = document.createElement("div");
  address.textContent =
    "🏤 Grand Trunk Rd, Dharamveer Colony, Gharaunda, Haryana - 132114";
  address.className = "address";
  contactBox.appendChild(address);

  const mapImg = document.createElement("img");
  mapImg.src = mapImage;
  mapImg.className = "map-img";
  contactBox.appendChild(mapImg);
}

createHeader();
createMain();

//createHome();
//createMenu();
createContact();
